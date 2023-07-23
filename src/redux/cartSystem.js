import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    quantity: 0
}

const cartSystem = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addCart:(state,action)=>{
            const find = state.cart.findIndex(item => item.id === action.payload.id)
            if(find >= 0){
                state.cart[find].quantity += 1
            }
            else{
                const tempvar = {...action.payload, quantity:1}
                // state.cart.push(action.payload)
                state.cart.push(tempvar)
            }
           
        },
        increaseQuantity: (state, action)=> {
            const find = state.cart.findIndex((item) => item.id === action.payload.id);
            if(find >= 0){
                state.cart[find].quantity += 1
            }
        },

        decreaseQuantity: (state, action)=>{
            const find = state.cart.findIndex((item)=>item.id === action.payload.id);
            if(find >= 0 && state.cart[find].quantity > 1){
                state.cart[find].quantity -= 1;
            }
        },
        removeFromCart: (state, action)=>{
           const newCart = state.cart.filter(
                item => item.id !== action.payload.id
            );
            state.cart = newCart;
        }
    }
})

export const {addCart, increaseQuantity, decreaseQuantity, removeFromCart} = cartSystem.actions;

export default cartSystem.reducer; 
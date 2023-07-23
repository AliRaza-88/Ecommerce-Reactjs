import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { FaBagShopping } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSystem";
import emptyCartImage from "../assets/8882813.jpg";

function CartDrawer() {
  const { cart } = useSelector((item) => item.user); //ye carts jo khali array bnai thi cartSystem me or user cartSystem or store me se
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleIncrease = (items) => {
    dispatch(increaseQuantity(items));
  };
  const handleDecrease = (items) => {
    dispatch(decreaseQuantity(items));
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.price;
    });

    return total;
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="cartDrawer">
      {!open && (
        <Button type="primary" onClick={showDrawer} className="fixed-btn">
          <div className="greenBox">
            {<FaBagShopping />} {cart.length} Items
          </div>
          <div className="white-box">${getTotal()}</div>
        </Button>
      )}

      <Drawer title="Hello" placement="right" onClose={onClose} open={open}>
        {cart.length === 0 ? (
          <div>
            <img src={emptyCartImage} alt="hdlas" width={300} height={300}/>
            <p className="text-center fs-3 mb-5">Your cart is empty</p>
          </div>
        ) : (
          <div className="container-fluid card1">
            {cart.map((item) => (
              <div className="row ">
                <div className="col-2">
                  <div className="incDecBtn">
                    <button
                      class="increase"
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>
                    {item.quantity}
                    <button
                      class="decrease"
                      onClick={() => handleDecrease(item)}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="col-3">
                  <img
                    src={item.images[0]}
                    alt="pic"
                    className="pic"
                    width="70"
                    height="100"
                  />
                </div>
                <div className="col-4 ">
                  <div>
                    <b>{item.title}</b>
                  </div>
                  <div className="text-success my-2 ">${item.price}</div>
                  <div>{`${item.quantity} X $${item.price}`}</div>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <b>${`${item.quantity * item.price}`}</b>
                  <span
                    className="rounded-circle mx-4 close-btn"
                    onClick={() => handleRemove(item)}
                  >
                    x
                  </span>
                </div>
                <hr />
              </div>
            ))}
          </div>
        )}
       
          <a href="/" className="btn btn-success d-grid checkoutButton">
            <span className="textOne">Checkout</span>{" "}
            <span className="textTwo">${getTotal()}</span>
          </a>
    
      </Drawer>
    </div>
  );
}

export default CartDrawer;

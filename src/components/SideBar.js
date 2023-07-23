import React, { useEffect, useState } from "react";
// import { FaAppleWhole, FaDog, FaBroom, FaCheese, FaBreadSlice } from "react-icons/fa6";
// import { GiMeat, GiCoffeeCup, GiCampCookingPot, GiWineBottle, GiMirrorMirror } from "react-icons/gi";
// import { AiOutlineDown } from "react-icons/ai";


function SideBar({onCategoryClick}) {
    const [apiCategories, setApiCategories] = useState([]);

    const getCategories =()=>{
        fetch('https://dummyjson.com/products/categories')
        .then((response) => response.json())
        .then((data)=> setApiCategories(data))
    }

    useEffect(()=>{
        getCategories();
    },[]);

    const handleCategoryClick = (categoryName)=>{
        onCategoryClick(categoryName);
    }
  return (
   
    <>
   
    
        <div className="bg-white border">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                        <h4 className="text-black px-5">Categories</h4>
                   {apiCategories.map((item)=>{
                        return(
                            <>
                            <li key={item.id}>
                            <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle" onClick={()=> handleCategoryClick(item)}>
                             <span className=" black ms-1 d-none d-sm-inline fs-4 category-text">{item}</span></a>
                        </li>
                            
                            </>
                        )
                   })
                }    
  
                </ul>
            </div>
        </div>
        
    

    </>
  );
}

export default SideBar;

import React from "react";
import Hero from "./Hero";
import Carousel from "./Carousel";
import BarCart from "./BarCart";
import CartDrawer from "./CartDrawer";
// import SingleItemModal from "./SingleItemModal";
// import { Route, Routes } from "react-router-dom";


function Wrapper() {

  
  return (
    <>
    
      <Hero />
      <CartDrawer />
      <Carousel />
      <BarCart />
      

    </>
  );
}

export default Wrapper;

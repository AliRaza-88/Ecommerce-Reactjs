import React from "react";
import NavBar from "./NavBar";

function Hero() {
  return (
    <>
    <NavBar />
      <div className="hero-image d-flex align-items-center text-center justify-content-center">
        <div className="d-flex flex-column">
        <div className="hero-text">
          <h1 className="hero-heading">Groceries Delivered in 90 Minutes</h1>
          <p className="hero-subheading">
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday
          </p>
        </div>
        <div className="d-flex ">
          <div className="input-group align-items-center text-center justify-content-center">
            <div className="form-outline">
              <input type="search" id="form1" className="form-control-lg border border-success styling"  placeholder="Search your products from here"/>
            </div>
            <button type="button" className="btn btn-success style">
              <i className="fas fa-search"></i>
              Search
            </button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

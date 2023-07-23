import React, { useRef, useEffect } from "react";
import logo from '../assets/PickBazar.webp'

function NavBar() {
    const navElRef = useRef(null);

     useEffect(()=>{
        const navEl = navElRef.current;

        const handleScroll = ()=>{
            if(window.scrollY >= 250){
                navEl.classList.add("navbar-scrolled");
            }else
            if(window.scrollY < 250){
                navEl.classList.remove("navbar-scrolled");
            }
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    },[]);
  return (
    <>
      <nav ref={navElRef} className="navbar navbar-expand-lg  px-4 py-3 fixed-top">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              width="160"
              height="27"
            />
          </a>
          <div className="dropdown">
            <a
              className="btn btn-white btn-outline-success dropdown-toggle"
              href="/"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
            <i className="fa-solid fa-apple-whole"></i>             Grocery
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a className="dropdown-item" href="/">
                  Grocery
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </li>
            </ul>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-1">
                <a className="nav-link active" aria-current="page" href="/">
                  Shops
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link active" href="/">
                  Offers
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link active" href="/">
                  FAQ
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link active" href="/">
                  Contact
                </a>
              </li>
              <li className="nav-item mx-2">
                <button className="btn btn-success" type="submit">
                  Become a Seller
                </button>
              </li>
              <li className="nav-item mx-2">
                <button className="btn btn-success" type="submit">
                  Join
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

import React, { useState } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
// import logo from "../../assets/logo"
import { CgLogIn, CgShoppingCart } from "react-icons/cg";
import { RiShoppingBag3Line } from "react-icons/ri";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <Link to="/">
        {/* <img className="nav_logo" alt="logo" src={logo}></img> */}
      </Link>
      <div className={`nav_items ${isOpen && "open"}`}>
        <Link to={"#"}>
          <RiShoppingBag3Line /> Productos
        </Link>
        <Link to={"#"}>
          {" "}
          <CgShoppingCart /> Cesta
        </Link>
        <Link to={"/admin"}>
          {" "}
          <CgLogIn /> Admin
        </Link>
      </div>
      {/* Burger menu */}
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import { CgLogIn, CgShoppingCart } from "react-icons/cg";
import { RiShoppingBag3Line } from "react-icons/ri";
import "../../assets/global.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="nav_logo">GALACTICA</h1>
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

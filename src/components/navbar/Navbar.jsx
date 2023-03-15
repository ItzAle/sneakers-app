import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import logo from "../../assets/logo"
import { CgLogIn, CgShoppingCart } from "react-icons/cg";
import { RiShoppingBag3Line } from "react-icons/ri";
import "../../assets/global.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <h1 className="nav_logo">GALACTICA</h1>
        </Link>
        <div className={`nav_items ${isOpen && "open"}`}>
          <Link to={"/shop"}>
            <RiShoppingBag3Line /> SHOP
          </Link>
          <Link to={"#"}>
            {" "}
            <CgShoppingCart /> BASKET
          </Link>
          <Link to={"/admin"}>
            {" "}
            <CgLogIn /> ADMIN
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
      <div className="navbar_desk">
        <Link to="/">
          <h1 className="nav_logo">GALACTICA</h1>
        </Link>
        <div className="nav_links">
          <Link to={"#"}>OUR TEAM</Link>
          <Link to={"/shop"}>SHOP</Link>
          <Link to={"/admin"}>CIRCULARITY</Link>
          <Link to={"/"}>FAQS</Link>
          <Link to={"/"}>LOG IN</Link>
          <Link to={"/admin"}>ADMIN</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

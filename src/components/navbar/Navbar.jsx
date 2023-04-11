import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/logo"
import { CgLogIn, CgShoppingCart } from "react-icons/cg";
import { RiShoppingBag3Line } from "react-icons/ri";
import "../../assets/global.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const handleLogOut = e => {
    e.preventDefault()
    localStorage.removeItem("login", "")
    navigate("/")
  }

  const userItem = JSON.parse(localStorage.getItem("login"));

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
          {userItem
              ? <Link onClick={handleLogOut} to={"/"}>
                  <CgShoppingCart /> LOG OUT
                </Link>

              : <Link to={"/login"}>
                  <CgShoppingCart /> LOG IN
                </Link>}
          <Link to={"/admin"}>
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
          <Link to={"/"}> OUR TEAM</Link>
          <Link to={"/shop"}>SHOP</Link>
          <Link to={"/"}> CIRCULARITY</Link>
          <Link to={"/"}>FAQS</Link>
          {userItem 
            ?<Link onClick={handleLogOut} to={""}>LOG OUT</Link>
            :<Link to={"/login"}>LOG IN</Link>
          }
          <Link to={"/admin"}>ADMIN</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "../../assets/global.css";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <Link to={"/"}>
        <h1 className="footerLogo">GALACTICA</h1>
      </Link>
      <div className="footerMenu">
        <Link to={"/"}>
          <p className="footerMenuText">SHOP</p>
        </Link>
        <Link to={"/"}>
          <p className="footerMenuText">TEAM</p>
        </Link>
        <Link to={"/"}>
          <p className="footerMenuText">SUSTAINABILITY</p>
        </Link>
        <Link to={"/"}>
          <p className="footerMenuText">OUR PROCESS</p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;

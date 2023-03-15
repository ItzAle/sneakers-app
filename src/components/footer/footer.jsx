import React from "react";
import { Link } from "react-router-dom";
import "../../assets/global.css";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <Link to={"/"}>
        <h1>GALACTICA</h1>
      </Link>
      <Link to={"/"}>
        <h2>SHOP</h2>
      </Link>
      <Link to={"/"}>
        <h2>TEAM</h2>
      </Link>
      <Link to={"/"}>
        <h2>SUSTAINABILITY</h2>
      </Link>
      <Link to={"/"}>
        <h2>OUR PROCESS</h2>
      </Link>
    </div>
  );
}

export default Footer;

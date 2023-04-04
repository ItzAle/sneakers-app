import React from "react";
import "../loginPage/Login.css";
import "./Register.css";
import { Link } from "react-router-dom";

function Register({ validateEmail, validatePass }) {
  function validateRegisterForm() {
    var x = document.forms["Form"]["name"].value;
    var y = document.forms["Form"]["email"].value;
    if (x === "" || y === "") {
      alert("Name and Email must be filled out.");
      return false;
    }}
    
  return (
    <div id="login">
      <form id="formLogin" name="Form" onSubmit={validateRegisterForm}>
        <h1 className="titleWelcome">Welcome to Galactica</h1>

        <div className="inputContainer">
          <input
            type="text"
            className="inputLogin"
            name="name"
            id="user-email"
          />
          <label htmlFor="labelLogin" className="labelLogin">
            Name
          </label>
        </div>

        <div className="inputContainer">
          <input
            type="text"
            className="inputLogin"
            name="email"
            id="user-email"
            onKeyUp={validateEmail}
          />
          <label htmlFor="labelLogin" className="labelLogin">
            Email
          </label>
          <span id="error-msg"></span>
        </div>

        <div className="inputContainer">
          <input
            type="password"
            className="inputLogin"
            name="password"
            onKeyUp={validatePass}
            maxLength="30"
          />
          <label htmlFor="labelLogin" className="labelLogin">
            Password
          </label>
          <span id="error-password"></span>
        </div>

        <div className="containerButons">
          <input
            type="submit"
            className="submitButton"
            value="Register"
            onClick={validateEmail}
          />
          <h5 className="loginNow">
            Are you already a member?{" "}
            <Link to={"/login"}>
              <span>Login now</span>
            </Link>{" "}
          </h5>
        </div>
      </form>
    </div>
  );
}

export default Register;

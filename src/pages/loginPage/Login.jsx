import React from "react";
import "./Login.css";
import { Link} from "react-router-dom";
import validateEmail from "../../components/validation/EmailValidation";
import validatePass from "../../components/validation/PasswordValidation";
import validateLoginForm from "../../components/validation/LoginFormValidation";

function Login() {
  return (
    <div id="login">
      <form id="formLogin" name="Form" onSubmit={validateLoginForm}>

        <h1 className="titleWelcome">Welcome to Galactica</h1>

        <div className="inputContainer">
          <input type="text" className="inputLogin" name="Email" id="user-email" onKeyUp={validateEmail} />
          <label htmlFor="labelLogin" className="labelLogin"> Email </label>
          <span id="error-msg"></span>
        </div>

        <div className="inputContainer">
          <input type="password" className="inputLogin" name="password" onKeyUp={validatePass} maxLength="30" />
          <label htmlFor="labelLogin" className="labelLogin"> Password </label>
          <span id="error-password"></span>
        </div>

        <div className="containerButons">
          <Link to={"/"}>
            <input
              type="submit"
              className="submitButton"
              value="Sign In"
              onClick={""}
            />
          </Link>
          
          <h5 className="registerNow"> Not a member yet?{" "}
            <Link to={"/register"}>
              <span>Register now</span>
            </Link>{" "}
          </h5>
        </div>

      </form>
    </div>
  );
}

export default Login;

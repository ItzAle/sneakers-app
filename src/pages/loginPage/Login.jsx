import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    function validateLoginForm() {
        var x = document.forms["Form"]["Email"].value;
        var y = document.forms["Form"]["password"].value;
        if (x === "") {
            alert("Name must be filled out.");
            return false;
        }
        else if (y.length < 20 && y.length > 8)
            {
            alert("Password must be at least 8 characters long.");
            return false;
        }}
        function validateEmail(){
            var emailField = document.getElementById('user-email');
            var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

            if( validEmail.test(emailField.value) ){
                return true;
            }else{
                alert('Email is invalid');
                return false; 
            }}
  return (
      <div id='login'>
          <form id='formLogin' name="Form" onSubmit={validateLoginForm}>

              <h1 className='titleWelcome'>Welcome to Galactica</h1>

              <div className='inputContainer'>
                  <input type="text" className='inputLogin' name="Email" id='user-email'/>
                  <label htmlFor="labelLogin" className='labelLogin' >Email</label>
              </div>

              <div className='inputContainer'>
                  <input type="password" className='inputLogin' name="password"/>
                  <label htmlFor="labelLogin" className='labelLogin' >Password</label>
              </div>
              <div className='containerButons'>
                    <input type="submit" className='submitButton' value="Sign In" onClick={validateEmail}/>
                  <h5 className='registerNow'>Not a member yet? <Link to={"/register"}><span>Register now</span></Link> </h5>
              </div>

          </form>
      </div>
  )
}

export default Login

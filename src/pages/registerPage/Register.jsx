import React from 'react'
import '../loginPage/Login.css'
import './Register.css'
import { Link } from 'react-router-dom'

function Register() {
    function validateRegisterForm() {
        var x = document.forms["Form"]["name"].value;
        var y = document.forms["Form"]["email"].value;
        var z = document.forms["Form"]["password"].value;
        if (x === "" || y === "") {
            alert("Name and Email must be filled out.");
            return false;
        }
        else if (z.length < 8)
            {
            alert("Password must be at least 8 characters long.");
            return false;
        }
        }
        function validateEmail(){
            var emailField = document.getElementById('user-email');
            var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

            if( validEmail.test(emailField.value) ){
                return true;
            }else{
                alert('Email is invalid');
                return false;
            }
        }
  return (
      <div id='login'>
          <form id='formLogin' name='Form' onSubmit={validateRegisterForm}>

              <h1 className='titleWelcome'>Welcome to Galactica</h1>

              <div className='inputContainer'>
                  <input type="text" className='inputLogin' name='name' id='user-email'/>
                  <label htmlFor="labelLogin" className='labelLogin'>Name</label>
              </div>

              <div className='inputContainer'>
                  <input type="text" className='inputLogin' name='email' />
                  <label htmlFor="labelLogin" className='labelLogin'>Email</label>
              </div>

              <div className='inputContainer'>
                  <input type="password" className='inputLogin' name='password' />
                  <label htmlFor="labelLogin" className='labelLogin'>Password</label>
              </div>

              
              <div className='containerButons'>
                    <input type="submit" className='submitButton' value="Register" onClick={validateEmail}/>
                    <h5 className='loginNow'>Are you already a member? <Link to={"/login"}><span>Login now</span></Link> </h5>
              </div>

          </form>
      </div>
  )
}

export default Register

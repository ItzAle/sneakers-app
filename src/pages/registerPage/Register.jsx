import React from 'react'
import '../loginPage/Login.css'
import './Register.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
      <div id='login'>
          <div id='formLogin'>

              <h1 className='titleWelcome'>Welcome to Galactica</h1>

              <div className='inputContainer'>
                  <input type="text" className='inputLogin' placeholder='' />
                  <label htmlFor="labelLogin" className='labelLogin'>Name</label>
              </div>

              <div className='inputContainer'>
                  <input type="text" className='inputLogin' placeholder='' />
                  <label htmlFor="labelLogin" className='labelLogin'>Email</label>
              </div>

              <div className='inputContainer'>
                  <input type="password" className='inputLogin' placeholder='' />
                  <label htmlFor="labelLogin" className='labelLogin'>Password</label>
              </div>

              
              <div className='containerButons'>
                  <Link to="/">
                      <input type="submit" className='submitButton' value="Register" />
                  </Link>
                  <h5 className='loginNow'>Are you already a member? <Link to={"/login"}><span>Login now</span></Link> </h5>
              </div>

          </div>
      </div>
  )
}

export default Register

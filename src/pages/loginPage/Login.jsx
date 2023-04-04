import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
      <div id='login'>
          <div id='formLogin'>

              <h1 className='titleWelcome'>Welcome to Galactica</h1>

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
                      <input type="submit" className='submitButton' value="Sign In" />
                  </Link>
                  <h5 className='registerNow'>Not a member yet? <Link to={"/register"}><span>Register now</span></Link> </h5>
              </div>

          </div>
      </div>
  )
}

export default Login

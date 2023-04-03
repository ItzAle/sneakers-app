import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
      <div id='login'>
          <div id='formLogin'>

              <h1>Welcome to Galactica</h1>

              <div className='inputContainer'>
                  <input type="text" className='inputLogin' placeholder='' />
                  <label htmlFor="labelLogin" className='labelLogin'>Email</label>
              </div>

              <div className='inputContainer'>
                  <input type="password" className='inputLogin' placeholder='' />
                  <label htmlFor="labelLogin" className='labelLogin'>Password</label>
              </div>

              <Link to="/">
                  <input type="submit" className='submitButton' value="Sign In" />
              </Link>    
          </div>
      </div>
  )
}

export default Login

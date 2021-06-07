import React from 'react'
import './../../../css/login.css'
import LoginForm from './loginForm'

const Login = (props) => {
  return (
    <body className="loginbody">
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Sign In</h3>
            <div className="d-flex justify-content-end social_icon">
              <span><i className="fab fa-facebook-square" /></span>
              <span><i className="fab fa-google-plus-square" /></span>
              <span><i className="fab fa-twitter-square" /></span>
            </div>
          </div>
          <div className="card-body">
            <LoginForm {...props} />
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?<a href="#">Sign Up</a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>



  )
}

export default Login

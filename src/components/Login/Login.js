import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className='login-page'>
        <div className='form'>
          <h2 className='headIng'>Login</h2>
          <form className='login-form'>
            <input type='email' placeholder='email' name='email' required />
            <input
              type='password'
              placeholder='password'
              name='password'
              required
            />
            <button>login</button>
            <p className='message'>
              Not registered? <Link to='/signup'>Create an account</Link>
            </p>
          </form>
          <h4>Continue With</h4>
          <div>
            <button>Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

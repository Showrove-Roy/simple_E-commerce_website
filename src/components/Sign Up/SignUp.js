import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <div className='login-page'>
        <div className='form'>
          <h2 className='headIng'>Sign Up</h2>
          <form className='register-form'>
            <input type='email' placeholder='email' name='email' required />
            <input
              type='password'
              placeholder='password'
              name='password'
              required
            />
            <input
              type='password'
              placeholder='confirm password'
              name='confirmPassword'
              required
            />
            <button>create</button>
            <p className='message'>
              Already registered? <Link to='/login'>Sign In</Link>
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

export default SignUp;

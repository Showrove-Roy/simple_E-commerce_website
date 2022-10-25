import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../constexts/UserContext";
import "./SignUp.css";

const SignUp = () => {
  const [errorMess, setErrorMess] = useState(null);
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handelSubmit = (event) => {
    event.preventDefault();
    setErrorMess(null);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if (password.length < 6) {
      setErrorMess("Password length should be 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMess("Password doesn't Match");
      return;
    }
    console.log(email, password, confirmPassword);

    // create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        setErrorMess(errorMessage);
      });

    form.reset();
  };
  return (
    <div>
      <div className='login-page'>
        <div className='form'>
          <h2 className='headIng'>Sign Up</h2>

          <h5 className='errorMess'>{errorMess}</h5>
          <form onSubmit={handelSubmit} className='register-form'>
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
            <button type='submit'>create</button>
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

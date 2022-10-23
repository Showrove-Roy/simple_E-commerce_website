import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../constexts/UserContext";
import "./Login.css";

const Login = () => {
  const [errorMess, setErrorMess] = useState(null);

  // get sign in function
  const { signIN } = useContext(AuthContext);

  const loginHandel = (event) => {
    event.preventDefault();
    setErrorMess(null);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setErrorMess("Password length should be 6 characters");
      return;
    }
    console.log(email, password);

    // resolve sign function
    signIN(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
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
          <h2 className='headIng'>Login</h2>
          <h5 className='errorMess'>{errorMess}</h5>

          <form onSubmit={loginHandel} className='login-form'>
            <input type='email' placeholder='email' name='email' required />
            <input
              type='password'
              placeholder='password'
              name='password'
              required
            />
            <button type='submit'>login</button>
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

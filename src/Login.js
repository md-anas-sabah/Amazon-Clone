import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const submit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submit}>
      <div className="login__logo">
        <h1>AnimeFlex</h1>
      </div>
      <div className="login__input">
        <label>Sign In</label>
        <p>Email or mobile phone number</p>
        <input type="text" value={email} onChange={handleEmail} />
        <button>Continue</button>
      </div>
      <div className="login__terms">
        <p>
          By continuing, you agree to Flex's <a href="/">Condition of Use </a>
          and <a href="/">Privacy Notice.</a>
        </p>
      </div>
      <hr />
      <div className="form__signUp">
        <p>New to AnimeFlex?</p>

        <button>
          <Link to="/signup">Create New Account</Link>
        </button>
      </div>
    </form>
  );
}

export default Login;

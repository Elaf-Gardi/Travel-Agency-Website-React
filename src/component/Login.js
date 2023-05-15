import React from "react";

export default function Book() {
  return (
    <div className="login">
      <i className="fa-solid fa-circle-xmark" id="form-close"></i>
      <form action="" id="form" className="form-class">
        <p className="login-text">LOGIN</p>
        <input type="email" className="box" placeholder="enter your email" />
        <input
          type="password"
          className="box"
          placeholder="enter your password"
        />
        <input type="submit" className="button" value="login now!" />
        <input type="checkbox" className="remember" />
        <label for="remember">Remember Me</label>
        <p className="password-account">
          Forget Password?
          <a href="#" className="click-register">
            Click here
          </a>
        </p>
        <p className="password-account">
          Don't have an account
          <a href="#" className="click-register">
            Register Now
          </a>
        </p>
      </form>
    </div>
  );
}

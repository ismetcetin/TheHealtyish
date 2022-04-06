import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

export default function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };
  return (
    <>
      {success ? (
        <section className="modal">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="modal__title">Welcome Ismet, You are logged in!</h1>
          <Link to="/dashboard" className="modal__link">Go to Dashboard</Link>
        </section>
      ) : (
        <section className="login__form">
          <h1 className="login__form__title">Sign In</h1>
          <form onSubmit={handleSubmit} className="login__form__container">
            <label htmlFor="username" className="login__form__label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="login__form__input"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="username" className="login__form__label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="login__form__input"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button className="login__form__btn">Sign In</button>
            <p>Need an Account?</p>
            <Link to="/login"  className="login__form__link">Sign Up</Link>
          </form>
        </section>
      )}
    </>
  );
}

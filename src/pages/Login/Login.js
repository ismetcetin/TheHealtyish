import React from 'react';
import './Login.scss';
import {Link} from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';


export default function Login() {

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [user, pwd])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user, pwd)
    setUser('');
    setPwd('');
    setSuccess(true);
  }
  return (
    <>
    {success ? (
      <section>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <h1>You are logged in!</h1>
          <br/>
          <p>
              <Link to="/dashboard">Go to Dashboard</Link>
          </p>
      </section>
  ) : (
    <section className='form'>
      <h1 className='form__title'>Sign In</h1>
      <form onSubmit={handleSubmit} className='form__container'>
        <label htmlFor="username" className='form__label'>Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
        <label htmlFor="username" className='form__label'>Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button className='btn'>Sign In</button>
        <p>Need an Account?</p>
        <Link to="/login">Sign Up</Link>
      </form>
    </section>
    )}
    </>
  )
}

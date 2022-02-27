import React, { useRef, useState, useContext } from 'react';

import AuthContext from '../../store/auth-context';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authContext = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const signupHandler = event => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // Send sign up info to Firebase

    setIsLoading(true);

    let url;

    if (isLogin) {
      console.log('logging in');
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBAK05pq6Pp1qURQFy1czDGyNiEATk-wkc';
    } else {
      console.log('signing up');
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBAK05pq6Pp1qURQFy1czDGyNiEATk-wkc';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        setIsLoading(false);
        if (res.ok) {
          // sign up worked
          return res.json();
        } else {
          // if sign up doesn't work
          return res.json().then(data => {
            // show error
            let errorMessage = 'Authentication failed!';
            throw new Error(errorMessage);
          });
        }
      })
      .then(data => {
        console.log('data from signup or login: ', data);

        if (isLogin) {
          alert('Your login was successful!');
          authContext.login(data.idToken);
        } else {
          alert('Your account creation was successful!');
        }
      })
      .catch(err => {
        alert(err.message);
      });

    // Clear inputs
    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';
  };

  return (
    <>
      {isLogin ? <h2>Log In</h2> : <h2>Sign Up</h2>}
      <form onSubmit={signupHandler}>
        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" required ref={emailInputRef}></input>
        <label htmlFor="password">Your Password:</label>
        <input
          type="password"
          id="password"
          required
          ref={passwordInputRef}
        ></input>
        {!isLoading ? (
          <input type="submit" value={isLogin ? 'Login' : 'Sign Up'}></input>
        ) : (
          <p>Sending request...</p>
        )}
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Create new account' : 'Login with existing account'}
      </button>
    </>
  );
};

export default AuthForm;

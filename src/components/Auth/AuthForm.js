import React, { useRef } from 'react';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const signupHandler = event => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // Send sign up info to Firebase
    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBAK05pq6Pp1qURQFy1czDGyNiEATk-wkc',
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(res => {
      if (res.ok) {
        // sign up worked
        alert('Your Account Creation was Successful!');
      } else {
        // if sign up doesn't work
        return res.json().then(data => {
          // show error
          alert(data.error.message);
        });
      }
    });

    // Clear inputs
    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';
  };

  return (
    <>
      <h2>Sign Up</h2>
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
        <input type="submit" value="Sign Up"></input>
      </form>
    </>
  );
};

export default AuthForm;

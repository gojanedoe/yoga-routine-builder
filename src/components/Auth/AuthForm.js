import React, { useRef, useState } from 'react';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

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

      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBAK05pq6Pp1qURQFy1czDGyNiEATk-wkc';

    } else { 

      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBAK05pq6Pp1qURQFy1czDGyNiEATk-wkc';

    }
    fetch(
      url,
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
      setIsLoading(false);
      if (res.ok) {
        // sign up worked
        console.log(res.json());
        return res.json();
        alert('Your Account Creation or login was Successful!');
      } else {
        // if sign up doesn't work
        return res.json().then(data => {
          // show error
          let errorMessage = 'Authentication failed!';
          // if (data && data.error && data.error.message) {
          //   errorMessage = data.error.message;
          // }
          // alert(errorMessage);
          throw new Error(errorMessage);
        });
      }
    }).then(data => {
      console.log(data);
    }).catch(err => {
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
        {!isLoading ? <input type="submit" value={isLogin ? "Login" : "Sign Up"}></input> : <p>Sending request...</p> }
      </form>
      { !isLogin ? <button onClick={() => setIsLogin(!isLogin)}>Login with existing account</button> : <button onClick={() => setIsLogin(!isLogin)}>Create a new account</button>}
    </>
  );
};

export default AuthForm;

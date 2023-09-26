import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/authActions'; // Import your auth actions
//import './Login.css'; // Add your login styles

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value.toLowerCase());
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Send a POST request to your server for login
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((user) => {
        // Dispatch the loginSuccess action with the user data
        onLogin(user);
        // redirect to home after successful login
      })
      .catch((error) => {
        setErrors('Login failed. Please check your credentials.');
      });
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Welcome!</h1>
        <h2>Login to Your App</h2>
        <input
          type="text"
          onChange={handleEmailChange}
          placeholder="Email"
          value={email}
        />
        <input
          type="password"
          onChange={handlePasswordChange}
          placeholder="Password"
          value={password}
        />
        {errors && <p className="login-error">{errors}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  onLogin: loginSuccess,
};

export default connect(null, mapDispatchToProps)(Login);

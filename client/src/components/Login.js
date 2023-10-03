import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';
//import './Login.css';

function Login({ onLogin, errors }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value.toLowerCase());
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Dispatch the login action with email and password
    onLogin(email, password);
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
        {errors && errors.length > 0 && (
          <div className="login-errors">
            {errors.map((error, index) => (
              <p key={index} className="login-error">
                {error}
              </p>
            ))}
          </div>
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  errors: state.auth.error ? state.auth.error.errors : [], 
});


const mapDispatchToProps = {
  onLogin: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

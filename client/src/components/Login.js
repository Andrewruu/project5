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
    <div className="login-container ">
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className='center-container'>Login to Novel Shelf</h1>
        <label for="FormControlInput" class="form-label">Email</label>
        <input
          className='form-control'
          type="text"
          onChange={handleEmailChange}
          placeholder="Email"
          value={email}
        />
        <label for="FormControlInput" class="form-label">Password</label>
        <input
          className='form-control'
          type="password"
          onChange={handlePasswordChange}
          placeholder="Password"
          value={password}
        />
        {errors && errors.length > 0 && (
          <div className="login-errors error-messages custom-error-message">
            {errors.map((error, index) => (
              <p key={index} className="login-error">
                {error}
              </p>
            ))}
          </div>
        )}
        <div className='center-container'>
        <button className='btn btn-outline-success my-2 custom-blue-button ' type="submit">Login</button>
        </div>
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

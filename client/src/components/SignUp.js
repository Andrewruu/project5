import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/authActions';

//import './Signup.css'; 

function SignUp({ onSignup, errors }) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleDisplayNameChange(e) {
    setDisplayName(e.target.value.toLowerCase());
  }

  function handleEmailChange(e) {
    setEmail(e.target.value.toLowerCase());
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Dispatch the signup action with displayName, email, and password
    onSignup(displayName, email, password);
  }

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h1>Register</h1>
        <input
          type="text"
          onChange={handleDisplayNameChange}
          placeholder="Display Name"
          value={displayName}
        />
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
          <div className="signup-errors">
            {errors.map((error, index) => (
              <p key={index} className="signup-error">
                {error}
              </p>
            ))}
          </div>
        )}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  errors: state.auth.error,
});

const mapDispatchToProps = {
  onSignup: signup,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signupSuccess } from '../actions/authActions'; // Import your auth actions
//import './Signup.css'; // Add your signup styles

function Signup({ onSignup }) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

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

    // Send a POST request to your server for signup
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ displayName, email, password }),
    })
      .then((response) => response.json())
      .then((user) => {
        // Dispatch the signupSuccess action with the user data
        onSignup(user);
        // redirect to home after successful signup
      })
      .catch((error) => {
        setErrors(['Signup failed. Please check your information.']); // You can handle multiple error messages if needed.
      });
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
        {errors.length > 0 && (
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

const mapDispatchToProps = {
  onSignup: signupSuccess,
};

export default connect(null, mapDispatchToProps)(Signup);

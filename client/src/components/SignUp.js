import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/authActions';

//import './Signup.css'; 

function SignUp({ onSignup, errors }) {

  const [user, setUser] = useState({
    display_name: '',
    email: '',
    password: '',
  });

  function handleDisplayNameChange(e) {
    setUser({ ...user, display_name: e.target.value.toLowerCase() });
  }

  function handleEmailChange(e) {
    setUser({ ...user, email: e.target.value.toLowerCase() });
  }

  function handlePasswordChange(e) {
    setUser({ ...user, password: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Dispatch the signup action with displayName, email, and password
    onSignup(user);
  }

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h1 className='center-container'>Register</h1>
        <label for="FormControlInput" class="form-label">Display Name</label>
        <input
          className='form-control'
          type="text"
          onChange={handleDisplayNameChange}
          placeholder="Display Name"
          value={user.display_name}
        />
        <div className="error-messages custom-error-message">
            {errors.map((error, index) => (
            error.includes("Display name") ?
            <p key={index} className="error">
                {error}
            </p> : null
            ))}
        </div>
        <label for="FormControlInput" class="form-label">Email</label>
        <input
          className='form-control'
          type="text"
          onChange={handleEmailChange}
          placeholder="Email"
          value={user.email}
        />
        
            {errors.map((error, index) => (
            error.includes("Email") ?
            <div className="error-messages custom-error-message">
            <p key={index} className="error">
                {error}
            </p> </div>: null
            ))}
        
        <label for="FormControlInput" class="form-label">Password</label>
        <input
          className='form-control'
          name="user[password]"
          type="password"
          onChange={handlePasswordChange}
          placeholder="Password"
          value={user.password}
        />
        <div className="error-messages custom-error-message">
            {errors.map((error, index) => (
            error.includes("Password") ?
            <p key={index} className="error">
                {error}
            </p> : null
            ))}
        </div>
        <div className='center-container'>
        <button className='center-container btn btn-outline-success my-2 custom-blue-button' type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  errors: state.auth.error ? state.auth.error.errors : [], 
});

const mapDispatchToProps = {
  onSignup: signup,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

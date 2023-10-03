import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login, signup } from '../actions/authActions';
import Login from '../components/Login';
import SignUp from '../components/SignUp';


function Access() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login-signup-card">
      {showLogin ? (
        <>
          <Login onLogin={login} />
          <div />
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUp onSignup={signup} />
          <div />
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}

const mapDispatchToProps = {
  login,
  signup,
};

export default connect(null, mapDispatchToProps)(Access);
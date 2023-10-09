import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { login, signup, clearErrors } from '../actions/authActions';
import Login from '../components/Login';
import SignUp from '../components/SignUp';


function Access() {
  const [showLogin, setShowLogin] = useState(true);
  const dispatch = useDispatch();
  
  function handleClick(show){
    setShowLogin(show)
    dispatch(clearErrors())
  }

  return (
    <div className="login-signup-card container custom-loginform-size">
      {showLogin ? (
        <>
          <Login onLogin={login} />
          <div />
          <p className='center-container'>
            Don't have an account? &nbsp;
            <button className='btn btn-outline-success my-2 custom-blue-button' color="secondary" onClick={() => handleClick(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUp onSignup={signup} />
          <div />
          <p className='center-container'>
            Already have an account? &nbsp;
            <button className='btn btn-outline-success my-2 custom-blue-button' color="secondary" onClick={() => handleClick(true)}>
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
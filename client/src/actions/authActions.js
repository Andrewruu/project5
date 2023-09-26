import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    SET_USER,
    CLEAR_USER,
  } from './actionTypes';
  
// Action creators for login
export const loginRequest = () => ({
    type: LOGIN_REQUEST,
  });
  
  export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
  });
  
  export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
  });
  
  // Action creators for signup
  export const signupRequest = () => ({
    type: SIGNUP_REQUEST,
  });
  
  export const signupSuccess = (user) => ({
    type: SIGNUP_SUCCESS,
    payload: user,
  });
  
  export const signupFailure = (error) => ({
    type: SIGNUP_FAILURE,
    payload: error,
  });
  
  // Action creators for logout
  export const logoutRequest = () => ({
    type: LOGOUT_REQUEST,
  });
  
  export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
  });
  
  export const logoutFailure = (error) => ({
    type: LOGOUT_FAILURE,
    payload: error,
  });
  
  // Action creators for setting and clearing user data
  export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
  });
  
  export const clearUser = () => ({
    type: CLEAR_USER,
  });

  // Thunk action creator for login
  export const login = (email, password) => {
    return async (dispatch) => {
      dispatch(loginRequest());
  
      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          const user = await response.json();
          dispatch(loginSuccess(user));
        } else {
          const error = await response.json();
          dispatch(loginFailure(error));
        }
      } catch (error) {
        dispatch(loginFailure(error.message));
      }
    };
  };
  
  // Thunk action creator for signup
  export const signup = (displayName, email, password) => {
    return async (dispatch) => {
      dispatch(signupRequest());
  
      try {
        const response = await fetch('/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ displayName, email, password }),
        });
  
        if (response.ok) {
          const user = await response.json();
          dispatch(signupSuccess(user));
        } else {
          const error = await response.json();
          dispatch(signupFailure(error));
        }
      } catch (error) {
        dispatch(signupFailure(error.message));
      }
    };
  };
  
  // Rest of your action creators for logout, set user, and clear user remain the same
  
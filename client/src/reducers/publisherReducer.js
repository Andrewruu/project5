import {
    FETCH_PUBLISHERS_REQUEST,
    FETCH_PUBLISHERS_SUCCESS,
    FETCH_PUBLISHERS_FAILURE,
  } from '../actionTypes';
  
  const initialState = {
    publishers: [],
    loading: false,
    error: null,
  };
  
  const publisherReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PUBLISHERS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_PUBLISHERS_SUCCESS:
        return {
          ...state,
          loading: false,
          publishers: action.payload,
        };
      case FETCH_PUBLISHERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default publisherReducer;
  
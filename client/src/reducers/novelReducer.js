import {
    ADD_NOVEL_REQUEST,
    ADD_NOVEL_SUCCESS,
    ADD_NOVEL_FAILURE,
  } from '../actionTypes';
  
  const initialState = {
    novel: [],
    loading: false,
    error: null,
  };
  
  const novelReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_NOVEL_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case ADD_NOVEL_SUCCESS:
        return {
          ...state,
          novel: action.payload,
          loading: false,
          error: null,
        };
  
      case ADD_NOVEL_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
  
      default:
        return state;
    }
  };
  
  export default novelReducer;
  
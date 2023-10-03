import {
    FETCH_TRANSLATORS_REQUEST,
    FETCH_TRANSLATORS_SUCCESS,
    FETCH_TRANSLATORS_FAILURE,
  } from '../actionTypes';
  
  const initialState = {
    translators: [],
    loading: false,
    error: null,
  };
  
  const translatorReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TRANSLATORS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_TRANSLATORS_SUCCESS:
        return {
          ...state,
          loading: false,
          translators: action.payload,
        };
      case FETCH_TRANSLATORS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default translatorReducer;
  
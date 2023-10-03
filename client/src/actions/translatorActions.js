import {
    FETCH_TRANSLATORS_REQUEST,
    FETCH_TRANSLATORS_SUCCESS,
    FETCH_TRANSLATORS_FAILURE,
  } from '../actionTypes';
  
  export const fetchTranslatorsRequest = () => ({
    type: FETCH_TRANSLATORS_REQUEST,
  });
  
  export const fetchTranslatorsSuccess = (translators) => ({
    type: FETCH_TRANSLATORS_SUCCESS,
    payload: translators,
  });
  
  export const fetchTranslatorsFailure = (error) => ({
    type: FETCH_TRANSLATORS_FAILURE,
    payload: error,
  });
  
  export const fetchTranslators = () => {
    return async (dispatch) => {
      dispatch(fetchTranslatorsRequest());
  
      try {
        const response = await fetch('/translators');
  
        if (response.ok) {
          const translators = await response.json();
          dispatch(fetchTranslatorsSuccess(translators));
        } else {
          const error = await response.json();
          dispatch(fetchTranslatorsFailure(error));
        }
      } catch (error) {
        dispatch(fetchTranslatorsFailure(error.message));
      }
    };
  };
  
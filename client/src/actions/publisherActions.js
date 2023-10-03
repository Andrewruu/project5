import {
    FETCH_PUBLISHERS_REQUEST,
    FETCH_PUBLISHERS_SUCCESS,
    FETCH_PUBLISHERS_FAILURE,
  } from '../actionTypes';
  
  export const fetchPublishersRequest = () => ({
    type: FETCH_PUBLISHERS_REQUEST,
  });
  
  export const fetchPublishersSuccess = (publishers) => ({
    type: FETCH_PUBLISHERS_SUCCESS,
    payload: publishers,
  });
  
  export const fetchPublishersFailure = (error) => ({
    type: FETCH_PUBLISHERS_FAILURE,
    payload: error,
  });
  
  export const fetchPublishers = () => {
    return async (dispatch) => {
      dispatch(fetchPublishersRequest());
  
      try {
        const response = await fetch('/publishers');
  
        if (response.ok) {
          const publishers = await response.json();
          dispatch(fetchPublishersSuccess(publishers));
        } else {
          const error = await response.json();
          dispatch(fetchPublishersFailure(error));
        }
      } catch (error) {
        dispatch(fetchPublishersFailure(error.message));
      }
    };
  };
  
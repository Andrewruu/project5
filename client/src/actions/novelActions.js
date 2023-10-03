import {
    ADD_NOVEL_REQUEST,
    ADD_NOVEL_SUCCESS,
    ADD_NOVEL_FAILURE,
    ADD_NOVEL_TO_USER,
  } from '../actionTypes';
  
  export const addNovelToUser = (updatedNovelsData) => ({
    type: ADD_NOVEL_TO_USER,
    payload: updatedNovelsData,
  });

  export const addNovelRequest = () => ({
    type: ADD_NOVEL_REQUEST,
  });
  
  export const addNovelSuccess = (novel) => ({
    type: ADD_NOVEL_SUCCESS,
    payload: novel,
  });
  
  export const addNovelFailure = (error) => ({
    type: ADD_NOVEL_FAILURE,
    payload: { error }, 
  });
  
  export const addNovel = (novelData) => {
    return async (dispatch) => {
      dispatch(addNovelRequest());
  
      try {
        const response = await fetch('/novels', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(novelData),
        });
  
        if (response.ok) {
          const novel = await response.json();
          dispatch(addNovelSuccess(novel));
          dispatch(addNovelToUser(novel))
          console.log(novel)
        } else {
          const error = await response.json();
          dispatch(addNovelFailure(error));
        }
      } catch (error) {
        dispatch(addNovelFailure(error.message));
      }
    };
  };
  
import {
    ADD_NOVEL_REQUEST,
    ADD_NOVEL_SUCCESS,
    ADD_NOVEL_FAILURE,
    DELETE_NOVEL_FAILURE,
    DELETE_NOVEL_REQUEST,
    DELETE_NOVEL_SUCCESS,
    EDIT_NOVEL_REQUEST,
    EDIT_NOVEL_SUCCESS,
    EDIT_NOVEL_FAILURE,

  } from '../actionTypes';

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
    // Actopm fpr adding novel
    export const addNovel = (novelData, nav) => {
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
            nav("/my-novels");
          } else {
            const error = await response.json();
            dispatch(addNovelFailure(error));
          }
        } catch (error) {
          dispatch(addNovelFailure(error.message));
        }
      };
    };

  export const deleteNovelRequest = () => ({
    type: DELETE_NOVEL_REQUEST,
  });

  export const deleteNovelSuccess = (novelId) => ({
    type: DELETE_NOVEL_SUCCESS,
    payload: novelId,
  });

  export const deleteNovelFailure = (error) => ({
    type: DELETE_NOVEL_FAILURE,
    payload: { error },
  });

  //Action for deleting Novel
  export const deleteNovel = (novelId, nav) => {
    return async (dispatch) => {
      dispatch(deleteNovelRequest());

      try {
        await fetch(`/novels/${novelId}`, {
          method: 'DELETE',
        });
        dispatch(deleteNovelSuccess(novelId));
        nav("/my-novels");
      } catch (error) {
        dispatch(deleteNovelFailure(error.message));
      }
    };
  };

  export const editNovelRequest = () => ({
    type: EDIT_NOVEL_REQUEST,
  });

  export const editNovelSuccess = (novel) => ({
    type: EDIT_NOVEL_SUCCESS,
    payload: novel,
  });

  export const editNovelFailure = (error) => ({
    type: EDIT_NOVEL_FAILURE,
    payload: { error },
  });
  //Action for edit novel
  export const editNovel = (novelId, novelData, nav) => {
    return async (dispatch) => {
      dispatch(editNovelRequest());

      try {
        const response = await fetch(`/novels/${novelId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(novelData),
        });

        if (response.ok) {
          const updatedNovel = await response.json();
          dispatch(editNovelSuccess(updatedNovel));
          
          nav(`/novel/${novelId}`)
        } else {
          const error = await response.json();
          dispatch(editNovelFailure(error));
        }
      } catch (error) {
        dispatch(editNovelFailure(error.message));
      }
    };
  };
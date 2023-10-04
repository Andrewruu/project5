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
    ADD_NOVEL_REQUEST,
    ADD_NOVEL_SUCCESS,
    ADD_NOVEL_FAILURE,
    DELETE_NOVEL_SUCCESS,
    DELETE_NOVEL_FAILURE,
    DELETE_NOVEL_REQUEST,
    CLEAR_ERRORS,
} from '../actionTypes';

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case SIGNUP_REQUEST:
        case LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
            };

        case LOGIN_FAILURE:
        case SIGNUP_FAILURE:
        case LOGOUT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,
                user: null,
                loading: false,
                error: null,
            };

        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };

        case CLEAR_USER:
            return {
                ...state,
                user: null,
            };


        case ADD_NOVEL_REQUEST:
        return {
            ...state,
            loading: true,
            error: null,
        };

        case ADD_NOVEL_SUCCESS:
            return {
                ...state,
                user: {
                ...state.user,
                novels: [...state.user.novels, action.payload],
                },
                loading: false,
                error: null,
            };

        case ADD_NOVEL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };

        case DELETE_NOVEL_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case DELETE_NOVEL_SUCCESS:
            const updatedNovels = state.user.novels.filter(
                (novel) => novel.id !== action.payload
            );
            return {
                ...state,
                user: {
                ...state.user,
                novels: updatedNovels,
                },
                loading: false,
                error: null,
            };

        case DELETE_NOVEL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null, 
            };

        default:
            return state;
    }
};

export default authReducer;

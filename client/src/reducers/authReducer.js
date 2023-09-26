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
} from '../actions/actionTypes';

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

        default:
            return state;
    }
};

export default authReducer;

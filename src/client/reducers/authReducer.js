import {
    FETCH_CURRENT_USER,
    LOGOUT_USER,
    TOGGLE_LOGIN_FORM,
} from '../actions/types';

const INITIAL_STATE = {
    user: null,
    loginFormStatus: false,
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_CURRENT_USER:
            return {
                ...state,
                user: action.payload.data.status === 'success' && action.payload.data.user || false
            }
        case LOGOUT_USER:
            return {
                ...state,
                user: false
            }
        case TOGGLE_LOGIN_FORM:
            return {
                ...state,
                loginFormStatus: action.status || false
            }
        default:
            return state;
    }
}

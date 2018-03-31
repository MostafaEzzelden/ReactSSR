import {
    FETCH_TODO,
    FETCH_TODOS,
} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_TODO:
            return [].concat([action.payload], state);
        case FETCH_TODOS:
            return action.payload.data;
        default:
            return state;
    }
};

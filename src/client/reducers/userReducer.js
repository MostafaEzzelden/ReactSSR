import {
    CREATE_USER
} from '../actions';

export default (state = null, action) => {
    switch (action.type) {
        case CREATE_USER:
            return action.payload.data
        default:
            return state;
    }
};

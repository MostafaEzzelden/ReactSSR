import {
    combineReducers
} from 'redux';
import {
    reducer as formReducer
} from 'redux-form';

import usersReducer from './usersReducer';
import todosReducer from './todosReducer';
import authReducer from './authReducer';

export default combineReducers({
    form: formReducer,
    users: usersReducer,
    todos: todosReducer,
    auth: authReducer,
});

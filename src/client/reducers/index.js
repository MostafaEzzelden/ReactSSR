import {
    combineReducers
} from 'redux';
import {
    reducer as formReducer
} from 'redux-form';

import usersReducer from './usersReducer';
import todosReducer from './todosReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';

export default combineReducers({
    form: formReducer,
    users: usersReducer,
    todos: todosReducer,
    auth: authReducer,
    admins: adminsReducer,
});

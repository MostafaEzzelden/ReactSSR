import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import todosReducer from './todosReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';

export default combineReducers({
  users: usersReducer,
  todos: todosReducer,
  auth: authReducer,
  admins: adminsReducer,
});

import {
    FETCH_USERS,
    FETCH_TODO,
    FETCH_TODOS,
    FETCH_CURRENT_USER,
    LOGOUT_USER,
    TOGGLE_LOGIN_FORM
} from './types'

export const fetchUsers = () => async(dispatch, getState, api) => {
    const res = await api.get('/users');

    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};

export const submitTodo = (values, history) => async(dispatch, getState, api) => {
    const res = await api.post('/todos', values);
    history.push('/todos');
    dispatch({
        type: FETCH_TODO,
        payload: res.data
    });
};

export const fetchTodos = () => async(dispatch, getState, api) => {
    const res = await api.get('/todos');
    dispatch({
        type: FETCH_TODOS,
        payload: res
    });
};

export const fetchCurrentUser = () => async(dispatch, getState, api) => {
    const res = await api.get('/users/me');
    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    });
};

export const logout = () => async(dispatch, getState, api) => {
    const res = await api.delete('/users/me/token');

    return dispatch({
        type: LOGOUT_USER,
        payload: res,
    })
}

export const setLoginForm = (status) => async(dispatch) => {
    return dispatch({
        type: TOGGLE_LOGIN_FORM,
        status
    })
}

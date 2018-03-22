
export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async(dispatch, getState, api) => {
    const res = await api.get('/users');

    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};

export const FETCH_TODOS = 'fetch_todos';
export const fetchTodos = () => async(dispatch, getState, api) => {
    const res = await api.get('/todos');
    dispatch({
        type: FETCH_TODOS,
        payload: res
    });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async(dispatch, getState, api) => {
    const res = await api.get('/users/me');
    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    });
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async(dispatch, getState, api) => {
    const res = await api.get('/admins');

    dispatch({
        type: FETCH_ADMINS,
        payload: res
    });
};


export const LOGOUT_USER = 'logout_user';
export const logout = () => async(dispatch, getState, api) => {
    const res = await api.delete('/users/me/token');

    return dispatch({
        type: LOGOUT_USER,
        payload: res,
    })
}

export const TOGGLE_LOGIN_FORM = 'toggle_login_form';

export const setLoginForm = (status) => async(dispatch) => {
    return dispatch({
        type: TOGGLE_LOGIN_FORM,
        status
    })
}

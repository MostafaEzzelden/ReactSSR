import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import TodosListPage from './pages/TodosListPage';
import NewTodoPage from './pages/todos/NewTodoPage';

export default [{
    ...App,
    routes: [{
        ...HomePage,
        path: '/',
        exact: true
    }, {
        ...RegisterPage,
        path: '/register'
    }, {
        ...TodosListPage,
        path: '/todos',
    }, {
        ...NewTodoPage,
        path: '/new',
    }, {
        ...UsersListPage,
        path: '/users'
    }, {
        ...NotFoundPage
    }]
}];

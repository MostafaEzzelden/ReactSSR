import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';
import LoginForm from './components/utilities/modals/LoginFormModal';

const App = ({ route }) => {
  return (
    <div>
        <Header />
            { renderRoutes(route.routes) }
        <LoginForm />
    </div>
  );
};

export default {
    component: App,
        loadData: ({
        dispatch
    }) => dispatch(fetchCurrentUser())

};

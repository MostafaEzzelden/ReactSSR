import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';
import LoginForm from './components/utilities/modals/LoginFormModal';

const App = ({ route }) => {
  return (
    <div id="page-container">
        <Header />
        <div id="page-content" style={{margin: 0, minHeight: '388px'}}>
            {renderRoutes(route.routes)}
        </div>
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

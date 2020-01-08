import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import {createBrowserHistory} from 'history';
import { Routes } from './modules/Router/Router';
import './main.scss';
import {configureStore} from './modules/Store/Index';
import UserContainer from './modules/UserContainer/UserContainer'

const history = createBrowserHistory();

const store = configureStore();
UserContainer.checkAuth().finally(() => {
    ReactDOM.render((
        <Provider store={store}>
            <Router history={history}>
                <Routes/>
            </Router>
        </Provider>
    ), document.getElementById('app'));
});
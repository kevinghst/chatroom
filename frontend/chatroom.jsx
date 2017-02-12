import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

import { signup, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;

    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser } };
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }

    window.store = store;
    window.signup = signup;
    window.login = login;
    window.logout = logout;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});

signup({username: "kevighst", password: "123456"});

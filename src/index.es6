import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import store from './store';
import routes from './routes';

render((
  <Provider store={store}>
    <Router history={ createBrowserHistory() } children={ routes } />
  </Provider>
), document.getElementsByClassName('app')[0]);

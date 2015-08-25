import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import store from './store';
import routes from './routes';


React.render(
  <Provider store={store}>
    { () => <Router history={ history } children={ routes } /> }
  </Provider>,
  document.body
);

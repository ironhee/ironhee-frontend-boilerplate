import React from 'react';
import { Route } from 'react-router';
import App from 'components/App';
import IndexPage from 'components/IndexPage';
import TodoPage from 'components/TodoPage';

export default (
  <Route component={ App }>
    <Route name="index" path="/" component={ IndexPage }/>
    <Route name="todo" path="/todo" component={ TodoPage }/>
  </Route>
);

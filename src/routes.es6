import React from 'react';
import { Route } from 'react-router';
import App from 'components/App';
import IndexPage from 'components/IndexPage';


export default (
  <Route component={ App }>
    <Route name="index" path="/" component={ IndexPage }/>
  </Route>
);

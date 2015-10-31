import React from 'react';
import { Route } from 'react-router';
import App from 'components/App';
import IndexSite from 'components/sites/IndexSite';


export default (
  <Route component={ App }>
    <Route name="index" path="/" component={ IndexSite }/>
  </Route>
);

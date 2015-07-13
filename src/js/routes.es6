import React from 'react';
import {
  Route, NotFoundRoute
} from 'react-router';
import App from 'components/App';
import IndexSite from 'components/sites/IndexSite';
import NotFoundSite from 'components/sites/NotFoundSite';


export default (
  <Route handler={ App }>
    <Route name="index" path="/" handler={ IndexSite }/>
    <NotFoundRoute handler={ NotFoundSite } />
  </Route>
);

import React from 'react';
import { Route } from 'react-router';
import App from 'components/App';
import IndexPage from 'components/IndexPage';
import TodoPage from 'components/TodoPage';
import CouponPage from 'components/CouponPage';

export default (
  <Route component={ App }>
    <Route path="/" component={ IndexPage }/>
    <Route path="/todo" component={ TodoPage }/>
    <Route path="/coupon" component={ CouponPage }/>
  </Route>
);

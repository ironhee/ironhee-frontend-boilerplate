import React from 'react';
import { Navigation } from 'react-router';

export default React.createClass({

  displayName: 'App',

  mixins: [
    Navigation
  ],

  render() {
    return (
      <div>
        <Router.RouteHandler />
      </div>
    );
  }

});

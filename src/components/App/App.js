import React, { Component } from 'react';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import styles from './App.scss';

@withContext
@withStyles(styles)
export default class App extends Component {
  render() {
    return (
      <div className="App">
        { this.props.children }
      </div>
    );
  }
}

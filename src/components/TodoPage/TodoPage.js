import React, { Component } from 'react';
import TodoApp from 'components/TodoApp';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import styles from './TodoPage.scss';

@withContext
@withStyles(styles)
export default class TodoPage extends Component {
  render() {
    return (
      <div className="TodoPage">
        <div className="row">
          <div className="small-6 small-centered columns">
            <div className="panel">
              <TodoApp />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

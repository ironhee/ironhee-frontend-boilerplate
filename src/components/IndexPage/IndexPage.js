import React, { Component } from 'react';
import TodoApp from 'components/TodoApp';


export default class IndexPage extends Component {
  render() {
    return (
      <div className="IndexPage">
        <h1>Hello World!</h1>
        <TodoApp />
      </div>
    );
  }
}

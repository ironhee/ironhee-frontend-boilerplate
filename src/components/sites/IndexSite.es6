import React, { Component } from 'react';
import TodoApp from 'components/todo/TodoApp';


export default class IndexSite extends Component {

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <TodoApp />
      </div>
    );
  }

}

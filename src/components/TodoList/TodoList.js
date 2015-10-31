import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import Todo from 'components/Todo';


export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, id) =>
          <Todo { ..._.pick(todo, 'text', 'completed') }
            key={ id }
            onClick={ () => this.props.onTodoClick(id) } />
        )}
      </ul>
    );
  }
}


TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

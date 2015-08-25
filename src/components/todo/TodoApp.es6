import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import todoSelector from 'selectors/todo';
import { addTodo, completeTodo, setVisibilityFilter } from 'actions/todo';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';


@connect(todoSelector)
export default class TodoApp extends Component {

  render() {
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            dispatch(addTodo(text))
          } />
        <TodoList
          todos={visibleTodos}
          onTodoClick={index =>
            dispatch(completeTodo(index))
          } />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          } />
      </div>
    );
  }

}

TodoApp.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};

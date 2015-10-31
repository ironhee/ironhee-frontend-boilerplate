import { createSelector } from 'reselect';
import { VisibilityFilters } from 'actions/todo';


const todosSelector = state => state.todo.todos;

const visibilityFilterSelector = state => state.todo.visibilityFilter;

const visibleTodosSelector = createSelector(
  [todosSelector, visibilityFilterSelector],
  (todos, filter) => {
    switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
    }
  }
);

const todoAppSelector = createSelector(
  [todosSelector, visibleTodosSelector, visibilityFilterSelector],
  (todos, visibleTodos, visibilityFilter) => ({ todos, visibleTodos, visibilityFilter })
);

export default todoAppSelector;

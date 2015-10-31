import { OrderedMap, Record } from 'immutable';
import uuid from 'node-uuid';
import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from 'actions/todo';


const { SHOW_ALL } = VisibilityFilters;
const TodoRecord = new Record({
  id: null,
  text: 'A brand new thing to do!',
  completed: false,
});


function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
}

function todos(state = new OrderedMap(), action) {
  let id;

  switch (action.type) {
  case ADD_TODO:
    id = uuid.v4();
    return state.set(id, new TodoRecord({
      id: id,
      text: action.text,
    }));
  case COMPLETE_TODO:
    id = action.id;
    return state.set(action.id, state.get(action.id).merge({
      completed: true,
    }));
  default:
    return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;

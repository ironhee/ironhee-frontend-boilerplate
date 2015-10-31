import { createStore, combineReducers } from 'redux';
import todo from 'reducers/todo';


const store = createStore(
  combineReducers({
    todo,
  })
);


export default store;

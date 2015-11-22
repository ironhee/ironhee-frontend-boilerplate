import { createStore, combineReducers } from 'redux';
import todo from 'reducers/todo';
import coupon from 'reducers/coupon';


const store = createStore(
  combineReducers({
    todo,
    coupon,
  })
);


export default store;

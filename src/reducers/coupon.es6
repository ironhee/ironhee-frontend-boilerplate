import uuid from 'node-uuid';
import { CREATE_COUPON } from 'actions/coupon';


function coupon(state = { 'code': null }, action) {
  switch (action.type) {
  case CREATE_COUPON:
    return { 'code': uuid.v4() };
  default:
    return state;
  }
}

export default coupon;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCoupon } from 'actions/coupon';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import styles from './CouponPage.scss';

@withContext
@withStyles(styles)
@connect(state => ({ coupon: state.coupon }))
export default class CouponPage extends Component {
  onClickCreateCoupon() {
    const { dispatch } = this.props;
    dispatch(createCoupon());
  }

  render() {
    return (
      <div className="CouponPage">
        <h1>CouponPage</h1>
        <input
          value={this.props.coupon ? this.props.coupon.code : null}
          readOnly />
        <button
          className="postfix"
          onClick={this.onClickCreateCoupon.bind(this)}
        >
          쿠폰 받기
        </button>
      </div>
    );
  }
}

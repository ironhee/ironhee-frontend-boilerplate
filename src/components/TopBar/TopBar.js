import React, { Component } from 'react';
import { Link } from 'react-router';

export default class TopBar extends Component {
  render() {
    return (
      <nav className="top-bar" data-topbar role="navigation">
        <ul className="title-area">
          <li className="name">
            <h1><Link to="/">Site</Link></h1>
          </li>
        </ul>

        <section className="top-bar-section">
          <ul className="left">
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <Link to="/coupon">Coupon</Link>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
}

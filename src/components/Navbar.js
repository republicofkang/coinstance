import React, { Component } from 'react';
import { connect } from 'react-redux';
import { accountSelector } from '../store/selectors';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/">
            Coinstance Token Exchange
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link small"
                href={`https://etherscan.io/address/${this.props.account}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.account}
              </a>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    account: accountSelector(state)
  };
}

export default connect(mapStateToProps)(Navbar);

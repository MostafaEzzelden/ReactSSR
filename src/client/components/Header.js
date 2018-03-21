import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    logout,
    setLoginForm
} from '../actions';

class Header extends Component {

  render() {
        return (
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
                SSR
            </Link>
            <ul className="right">
                <li><Link to="/todos">Todos</Link></li>
                {
                    this.props.auth.user ?
                        <li><a href="/" onClick={this.props.logout.bind(this)}>Logout</a></li>
                    :
                        <span>
                            <li><a href="javascript:void(0);" onClick={this.props.setLoginForm.bind(this, true)}>Login</a></li>
                            <li><Link to="/register">Register</Link></li>
                        </span>
                }
            </ul>
          </div>
        </nav>
        );
    }
};

function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}

export default connect(mapStateToProps, {
    logout,
    setLoginForm,
})(Header);

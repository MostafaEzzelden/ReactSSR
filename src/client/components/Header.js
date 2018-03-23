import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    logout,
    setLoginForm
} from '../actions';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownState: '_',
            showNavMenu: false,
        }
        this.toggleStateDropdownAccount = this.toggleStateDropdownAccount.bind(this)
    }

    toggleStateDropdownAccount() {
        this.setState(() => {
            return {
                dropdownState: this.state.dropdownState === '_' ? 'open' : '_'
            }
        })
    }

    logout() {
        this.props.logout().then(() => {
            window.location.href = "/";
        })
    }

    showNavMenu() {
        this.setState({
            showNavMenu: !this.state.showNavMenu
        })
    }

    generateStyleNavAtMedia() {
        if (this.refs.collapse) {
            if (this.state.showNavMenu) {
                return {
                    overflow: 'visible',
                    height: 'auto'
                }
            } else {
                return {
                    overflow: 'hidden',
                    height: '0'
                }
            }
        }
        return {}
    }

    render() {
        return (
        <header className="navbar">
            <div className="navbar-inner remove-radius remove-box-shadow">
                <div className="container">
                    <a ref="collapse" className="btn btn-navbar" data-toggle="collapse" data-target=".navbar-responsive-collapse" onClick={this.showNavMenu.bind(this)}>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </a>
                    <Link className="brand" to="/">Logo</Link>
                    <div className="nav-collapse collapse navbar-responsive-collapse" style={this.generateStyleNavAtMedia()}>
                        <ul className="nav">
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><Link to="/todos">Todos</Link></li>
                            {
                                this.props.auth.user && (
                                    <li><Link to="/new">New Todo</Link></li>
                                )
                            }
                        </ul>
                        <form className="navbar-search pull-left" action="#">
                            <input type="text" className="search-query span2" placeholder="Search" />
                        </form>
                        {this.props.auth.user ?
                        <ul className="nav pull-right">
                            <li className={"dropdown " + (this.state.dropdownState || '')} onClick={this.toggleStateDropdownAccount}>
                                <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown">{this.props.auth.user.username} <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li className="divider"></li>
                                    <li><a href="javascript:void(0)" onClick={this.logout.bind(this)}>Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                        :
                        <ul className="nav pull-right">
                            <li><a href="javascript:void(0);" onClick={this.props.setLoginForm.bind(this, true)}>Login</a></li>
                            <li className="divider-vertical"></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>}
                    </div>
                </div>
            </div>
        </header>
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

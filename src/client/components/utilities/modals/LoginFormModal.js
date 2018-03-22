import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Modal } from  'react-bootstrap';
import axios from 'axios';
import { setLoginForm } from '../../../actions';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resError: false,
            errors: [],
            values: {},
        }
    }

    handleHide(cb) {
        this.props.setLoginForm(false).then(() => {
            this.setState({
                values: {},
                errors: [],
                resError: false,
            })
            this.refs.form.querySelectorAll('input').forEach(input => {
                input.value = "";
            })

            cb && typeof cb === 'function' && cb()
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let _errors = [];
        let elements = this.refs.form.querySelectorAll('input');
        elements.forEach(ele => {
            this.handleInputValidation(ele, _errors)
        })
        if(_errors.length) return false;
        axios.post('/api/users/login', this.state.values).then((res) => {
            if(res.data.status === "error") {
                return this.setState({
                    resError: true
                })
            }
            this.handleHide(() => {
                return setTimeout(() => {
                    window.location.href = "/";
                }, 200);
            })
        })
    }


    validate(values) {
        let errors = {};
        if (!values.email) errors.email = 'Required'
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Invalid email address'
        if (!values.password) errors.password = 'Required'
        return errors;
    }

    handleInputValidation(e, _errors = []) {
        let ele = e.hasOwnProperty('target') ? e.target : e;
        let errors = this.state.errors;
        let values = this.state.values;
        values[ele.name] = ele.value;
        let hasError = this.validate(values);
        if (hasError[ele.name]) _errors.push(hasError[ele.name])
        errors[ele.name] = (hasError[ele.name] || false);
        this.setState({
            values,
            errors
        });
        return (hasError[ele.name] || false);
    }

    render () {
        let { errors } = this.state;
        return (
            <Modal show={this.props.loginFormStatus} onHide={this.handleHide.bind(this)} bsSize="small">
                {this.head()}
                <div className="modal-header">
                    <button type="button" className="close" onClick={this.handleHide.bind(this)}>×</button>
                    <h4>Login</h4>
                </div>
                <div className="modal-body">
                    { this.state.resError && <div className="alert alert-error"><button type="button" className="close" onClick={() => this.setState({resError: false})}>×</button><strong>Error!</strong> Invalid Credentials!</div>}
                    <form className="form-horizontal" id="login-form__modal" onSubmit={this.handleSubmit.bind(this)} ref="form">
                        <div className={`control-group ${ (errors && errors.email && " error")  || ''}`}>
                            <label className="control-label" htmlFor="email">Email</label>
                            <div className="controls">
                                <input name="email" type="text" onKeyUp={this.handleInputValidation.bind(this)} onBlur={this.handleInputValidation.bind(this)} />
                                <div className="help-block">
                                    {errors && errors.email && <span>{errors && errors.email}</span> || ''}
                                </div>
                            </div>
                        </div>
                        <div className={`control-group ${ (errors && errors.password && " error")  || ''}`}>
                            <label className="control-label" htmlFor="password">Password</label>
                            <div className="controls">
                                <input name="password" type="password" onKeyUp={this.handleInputValidation.bind(this)} onBlur={this.handleInputValidation.bind(this)} />
                                <div className="help-block">
                                    {errors && errors.password && <span>{errors && errors.password}</span> || ''}
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-default" type="submit" form="login-form__modal">Login</button>
                </div>
            </Modal>
        );
    }

    head() {
        return (
            this.props.loginFormStatus && (
                <Helmet>
                    <title>Company | Login</title>
                    <meta property="og:title" content="Login Page" />
                </Helmet>
            )
        );
    }

}

function mapStateToProps(state) {
    return {
        loginFormStatus: state.auth.loginFormStatus,
    }
}

export default connect(mapStateToProps, {
    setLoginForm
})(LoginForm);

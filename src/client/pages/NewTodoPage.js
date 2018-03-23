import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import requireAuth from '../components/hocs/requireAuth';

class NewTodo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            resError: null
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(data) {
        this.setState({resError: null})
        axios.post('/api/users', data).then((res) => {
            if(res.data.hasOwnProperty('errors') || res.data.hasOwnProperty('errmsg')) {
                this.setState({resError: res.data.hasOwnProperty('errmsg') ? 'This Email already exists' : 'Server Error Please try agin'})
                // this.props.destroy()
            } else {
                window.location.href = "/";
            }
        })
    }

	head() {
		return (
		  <Helmet>
		    <title>Company | NewTodo</title>
		    <meta property="og:title" content="NewTodo" />
		  </Helmet>
		);
	}

	render() {
		const { handleSubmit } = this.props
	    return (
			<div className="container">
					{this.head()}
					<form className="form-horizontal form-box" onSubmit={handleSubmit(this.onSubmit)} style={{overflow: 'hidden'}}>
						<h4 className="form-box-header">NewTodo</h4>
						<Field
							name="username"
							type="text"
							component={renderField}
							label="Username"
						/>
						<Field
							name="email"
							type="email"
							component={renderField}
							label="Email"
						/>
                        { this.state.resError && <span className="red-text text-darken-4">{this.state.resError}</span> }
						<Field
							name="age"
							type="number"
							component={renderField}
							label="Age"
						/>
						<Field
							name="password"
							type="password"
							component={renderField}
							label="Password"
						/>
						<Field
							name="repassword"
							type="password"
							component={renderField}
							label="Confirm Password"
						/>
						<div className="form-actions">
					        <button
					        type="submit"
					        disabled={false}
					        className="btn btn-success">
					        Submit</button>
				      	</div>
					</form>
			</div>
	    );
	}
}

function mapStateToProps(state) {
    return {

    };
}

const renderField = ({input, label, type, meta: { touched, error, warning }}) => (
  	<div className={`control-group ${(touched && ((error && " error") || (warning && " warning")))  || ''}`}>
    	<label className="control-label" htmlFor={label}>{label}</label>
	    <div className="controls">
	      	<input {...input} type={type} />
	      	<div className="help-inline">
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
		    </div>
	    </div>
  	</div>
);

const validate = values => {
    const errors = {}
    if (!values.username) errors.username = 'Required'
    else if (values.username.length < 6) errors.username = 'Must be 6 characters or than'

    if (!values.email)  errors.email = 'Required'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Invalid email address'

    if (!values.age) errors.age = 'Required'
    else if (isNaN(Number(values.age))) errors.age = 'Must be a number'
    else if (Number(values.age) < 18) errors.age = 'Sorry, you must be at least 18 years old'

    if (!values.password) errors.password = 'Required'
    else if (values.password.length < 5) errors.password = 'Must be 6 characters or than'

    if (!values.repassword) errors.repassword = 'Required'
    else if(values.password && values.password.length > 0 && values.password !== values.repassword) errors.repassword = 'RE-Password does not match'

    return errors
}

const warn = values => {
    const warnings = {}
    if (values.age < 19) warnings.age = 'Hmm, you seem a bit young...'
    if (values.password && values.password.length < 7) warnings.password = 'Password is Weak...'
    return warnings
}

NewTodo = reduxForm({
    form: 'syncValidationNewTodo',
    validate,
    warn
})(NewTodo);

export default {
    component: connect(mapStateToProps)(requireAuth(NewTodo))
};

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Helmet } from 'react-helmet';
import { createUser } from '../actions';

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            resError: null
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(data) {

        this.setState({resError: null})
        this.props.createUser(data).then((res) => {
            if(res.payload.data.hasOwnProperty('errors') || res.payload.data.hasOwnProperty('errmsg')) {
                this.setState({resError: res.payload.data.hasOwnProperty('errmsg') ? 'This Email already exists' : 'Server Error Please try agin'})
                // this.props.destroy()
            }
        })
    }

	head() {
		return (
		  <Helmet>
		    <title>Company | Register</title>
		    <meta property="og:title" content="Register" />
		  </Helmet>
		);
	}

	render() {
		const { handleSubmit, submitSucceeded } = this.props
	    return (
			<div className="container">
				<div className="row">
					{this.head()}
					<form ref={instance => this.form = instance} onSubmit={handleSubmit(this.onSubmit)}>
						<h3>Register</h3>
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
							label="RE-Password"
						/>
						<div>
					        <button
					        type="submit"
					        disabled={false}
					        className="btn waves-effect waves-light">
					        Register</button>
				      	</div>
					</form>
				</div>
			</div>
	    );
	}
}

function mapStateToProps(state) {
    return {

    };
}


const renderField = ({input, label, type, meta: { touched, error, warning }}) => (
  	<div className={`form-group ${touched && ( (error && " red-text text-darken-4") || (warning && " has-warning"))}`}>
    	<label>{label}</label>
	    <div>
	      	<input {...input} placeholder={label} type={type} className="form-control" />
	      	<div className="text-help">
		      {touched && ((error && <span className="red-text text-darken-4">{error}</span>) ||(warning && <span className="orange-text text-darken-4">{warning}</span>))}
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
    else if(values.password.length > 0 && values.password !== values.repassword) errors.repassword = 'RE-Password does not match'

    return errors
}

const warn = values => {
    const warnings = {}
    if (values.age < 19) warnings.age = 'Hmm, you seem a bit young...'
    if (values.password && values.password.length < 7) warnings.password = 'Password is Weak...'
    return warnings
}

Register = reduxForm({
    form: 'syncValidationUser',
    validate,
    warn
})(Register);

export default {
    component: connect(mapStateToProps, { createUser })(Register)
};

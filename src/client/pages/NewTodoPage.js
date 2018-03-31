import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import requireAuth from '../components/hocs/requireAuth';
import { submitTodo } from '../actions';

class NewTodo extends Component {

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(data) {
        this.props.submitTodo(data, this.props.history);
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
					<form className="form-horizontal form-box"
                        onSubmit={handleSubmit(this.onSubmit)}
                        style={{overflow: 'hidden'}}>
						<h4 className="form-box-header">Create New Private Todo</h4>
						<Field
							name="text"
							type="text"
							component={renderField}
							label="Text"
						/>
						<Field
							name="content"
							type="text"
							component={renderField}
							label="Content"
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

const renderField = ({input, label, type, meta: { touched, error }}) => (
  	<div className={`control-group ${(touched && error && " error") || ''}`}>
    	<label className="control-label" htmlFor={label}>{label}</label>
	    <div className="controls">
	      	<input {...input} type={type} />
	      	<div className="help-inline">
                {touched && error && <span>{error}</span>}
		    </div>
	    </div>
  	</div>
);

const validate = values => {
    const errors = {}
    if (!values.text) errors.text = 'Required'
    if (!values.content) errors.content = 'Required'
    return errors
}


NewTodo = reduxForm({
    form: 'syncValidationNewTodo',
    validate,
})(NewTodo);

export default {
    component: connect(mapStateToProps, {
        submitTodo
    })(requireAuth(NewTodo))
};

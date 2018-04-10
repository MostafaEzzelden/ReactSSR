import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import TodoField from './TodoField';
import formFields from './formFields';

class TodoForm extends Component {

    renderFields() {
        return _.map(formFields, ({ label, name}) => {
            return (
                <Field
                  key={name}
                  component={TodoField}
                  type="text"
                  label={label}
                  name={name}
                />
            );
        });
    }

    render() {
      const { handleSubmit } = this.props;

        return (
            <div>
                <form className="form-horizontal form-box" onSubmit={handleSubmit(this.props.onTodoSubmit)} style={{overflow: 'hidden'}}>
                    <h4 className="form-box-header">Create New Private Todo</h4>
                    <div className="step">
                        <div className="wizard-steps row-fluid">
                            <div className={"span4 text-center active"}>1. Add Valid Data</div>
                            <div className="span4 text-center">2. Review</div>
                        </div>
                        {this.renderFields()}
                    </div>
                    <div className="form-actions">
                        <Link to="/todos" className="btn btn-danger">back</Link>
                        <button type="submit" className="btn btn-success">Next</button>
                    </div>
                </form>
            </div>
        )
    }
}


const validate = values => {
    const errors = {}
    if (!values.text) errors.text = 'Required'
    if (!values.content) errors.content = 'Required'
    return errors
}

export default reduxForm({
    form: 'todoForm',
    validate,
    destroyOnUnmount: false
})(TodoForm);

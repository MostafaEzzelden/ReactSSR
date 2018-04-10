import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitTodo } from '../../actions';
import formFields from './formFields';

class TodoFormReview extends Component {

    onSubmit(event) {
        event.preventDefault();
        const { submitTodo, history, formValues } = this.props;
        submitTodo(formValues, history);
    }

    renderFields() {
        const { formValues } = this.props;
        return _.map(formFields, ({ name, label }) => {
            return (
                <div className="control-group" key={label}>
                    <label className="control-label" htmlFor={label}>{label}</label>
                    <div className="controls">
                        <div>{formValues[name]}</div>
                    </div>
                </div>
            );
        });
    }

    renderButtons() {
        const { onCancel } = this.props;
        return (
            <div className="form-actions">
                <button className="btn btn-danger" onClick={onCancel}>back</button>
                <button type="submit" className="btn btn-success">Save</button>
            </div>
        );
    }

    render() {
        return (
            <form className="form-horizontal form-box" onSubmit={this.onSubmit.bind(this)} style={{overflow: 'hidden'}}>
                <h4 className="form-box-header">Please confirm your entries</h4>
                <div className="step">
                    <div className="wizard-steps row-fluid">
                        <div className={"span4 text-center"}>1. Add Valid Data</div>
                        <div className="span4 text-center active">2. Review</div>
                    </div>
                    {this.renderFields()}
                </div>
                {this.renderButtons()}
            </form>
        );
    }
}


function mapStateToProps(state) {
    return {
        formValues: state.form.todoForm.values
    };
}

export default connect(mapStateToProps, {
    submitTodo
})(withRouter(TodoFormReview));

import React from 'react';

export default ({input, label, type, meta: { touched, error }}) => (
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

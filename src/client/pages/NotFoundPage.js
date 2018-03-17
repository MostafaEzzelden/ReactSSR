import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 center-align" style={{marginTop: '200px'}}>
                    <h3>Ooops, Route not found.</h3>
                </div>
            </div>
        </div>
    )
};

export default {
  component: NotFoundPage
};

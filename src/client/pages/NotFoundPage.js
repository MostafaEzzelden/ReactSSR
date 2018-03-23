import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return (
        <div>

            <Helmet>
                <title>Company | Ooops</title>
                <meta property="og:title" content="Not Found Page" />
            </Helmet>
            <div className="text-center" style={{ marginTop: '200px' }}>
                <h3>Ooops, Route not found.</h3>
            </div>
        </div>
    )
};

export default {
  component: NotFoundPage
};

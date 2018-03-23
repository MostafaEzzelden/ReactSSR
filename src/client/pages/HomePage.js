import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Home extends Component {
    head() {
        return (
            <Helmet>
                <title>Company | Home</title>
                <meta property="og:title" content="Home Page" />
            </Helmet>
        );
    }

    render() {
        return (
            <div>
                {this.head()}
                <div className="text-center" style={{ marginTop: '200px' }}>
                    <h3>Welcome</h3>
                    <p>Check out these awesome features</p>
                </div>
            </div>
        );
    }
};

export default {
  component: Home
};

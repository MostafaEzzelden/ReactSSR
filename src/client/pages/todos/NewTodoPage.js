import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import requireAuth from '../../components/hocs/requireAuth';
import TodoForm from './TodoForm';
import TodoFormReview from './TodoFormReview';

class NewTodo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showFormReview: false,
            lastAction: 'add'
        }
    }

    componentDidMount() {
        //
    }

	head() {
		return (
		  <Helmet>
		    <title>Company | New Todo</title>
		    <meta property="og:title" content="NewTodo" />
		  </Helmet>
		);
	}

    renderContent() {
        if (this.state.showFormReview) {
            return (
                <TodoFormReview onCancel={() => this.setState({ showFormReview: false })} />
            );
        }

        return (
            <TodoForm onTodoSubmit={() => this.setState({showFormReview: true})} />
        );
    }

	render() {
	    return (
			<div className="container">
				{this.head()}
                {this.renderContent()}
			</div>
	    );
	}
}

export default {
    component: connect(null, {})(requireAuth(NewTodo))
};

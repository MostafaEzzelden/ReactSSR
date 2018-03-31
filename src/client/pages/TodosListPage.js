import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from '../components/hocs/requireAuth';
import { fetchTodos } from '../actions';
import { Helmet } from 'react-helmet';

class TodosList extends Component {

    componentDidMount() {
        this.props.fetchTodos();
    }

    renderTodos() {
        if(this.props.todos.length) {
            return this.props.todos.map(todo => {
                return <li key={todo._id}>{todo.text}</li>;
            });
        } else {
            return <div className="__no-data">There are no todo available yet.</div>
        }
    }

    head() {
        return (
            <Helmet>
                <title>{`${this.props.todos.length} Todos Loaded`}</title>
                <meta property="og:title" content="Todos App"/>
            </Helmet>
        );
    }

    render() {
        return (
            <div>
                {this.head()}
                <ul>{this.renderTodos()}</ul>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        auth: state.auth,
    };
}

function loadData(store) {
    return store.dispatch(fetchTodos());
}

export default {
    loadData,
    component: connect(mapStateToProps, {
        fetchTodos
    })(requireAuth(TodosList))
};

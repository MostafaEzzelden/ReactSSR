import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions';
import { Helmet } from 'react-helmet';

class TodosList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderTodos() {
    return this.props.todos.map(todo => {
      return <li key={todo._id}>{todo.text}</li>;
    });
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.todos.length} Todos Loaded`}</title>
        <meta property="og:title" content="Todos App" />
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
  return { todos: state.todos };
}

function loadData(store) {
  return store.dispatch(fetchTodos());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchTodos })(TodosList)
};

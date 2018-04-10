import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from '../components/hocs/requireAuth';
import { fetchTodos } from '../actions';
import { Helmet } from 'react-helmet';
import moment from 'moment';

class TodosList extends Component {

    componentDidMount() {
        this.props.fetchTodos();
    }

    renderTodo({text, content, _id, createdAt}) {
        return (
            <div className="span6" key={_id}>
                <div className="media media-hover push">
                    <a href="javascript:void(0)" className="pull-left">
                        <img src="dist/img/placeholders/image_dark_120x120.png" className="media-object img-polaroid" alt="Image" />
                    </a>
                    <div className="media-body">
                        <h4 className="media-heading">
                            <small>
                                <span className="label label-success">
                                <i className="icon-ok"></i>
                                </span></small>&nbsp;{text}&nbsp;<small><span className="label label-warning">{moment(createdAt).format('h:mm a')}</span>
                            </small>
                        </h4>
                        <a href="javascript:void(0)">http://example-link-1.com</a>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        )
    }

    renderTodos(todos) {
        todos = todos || this.props.todos.slice(0);
        let odTodos = todos.splice(0, 2);
        if(odTodos.length > 0) {
            return (
                <div>
                    <div className="row-fluid">{odTodos.map((todo) => this.renderTodo(todo))}</div>
                    {this.renderTodos(todos)}
                </div>
            )
        } else if(todos.length === this.props.todos.length) {
            return <div>There are no data yet.</div>
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
                {this.renderSearchResult()}
                {this.renderTodos()}
            </div>
        );
    }

    renderSearchResult() {
        return (
            <div className="page-header page-header-top clearfix">
                <h4 className="pull-left">{this.props.todos.length} Todos Found</h4>
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

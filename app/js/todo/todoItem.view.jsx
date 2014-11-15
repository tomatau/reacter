var React = require('react');

var TodoActions = require('./todoActions.js');

var TodoItem = React.createClass({
    propTypes: {
        todo: React.PropTypes.object.isRequired
    },
    onDestroyClick() {
        TodoActions.removeTodo(this.props.todo.id);
    },
    render() {
        var todo = this.props.todo;
        return (
            <li key={todo.id}>
                <label>
                {todo.text}
                </label>&nbsp;
                <button
                    onClick={this.onDestroyClick}
                    className="destroy">
                    x
                </button>
            </li>
        )
    }
});

module.exports = TodoItem;
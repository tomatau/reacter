var React = require('react');

var TodoFooter = React.createClass({
    propTypes: {
        todos: React.PropTypes.object.isRequired
    },
    render() {
        var totalTodos = this.props.todos.length
            ,completed = 0;

        var remaining = totalTodos - completed;

        return (
            <footer id="footer">
                <span className="todo-count">
                    <strong>{remaining}</strong>
                    &nbsp;item{(remaining > 1) ? "s" : ""}
                </span>
                <button>Active</button>
                <button>Complete</button>
                <button>Incomplete</button>
            </footer>
        )
    }
});

module.exports = TodoFooter;
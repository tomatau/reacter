var React = require('react');

var TodoActions = require('./todoActions.js');

var TodoHeader = React.createClass({
    _onSubmit(e){
        e.preventDefault();
        var inputNode = this.refs.todoInput.getDOMNode();
        console.log(TodoActions.addTodo(inputNode.value))
        inputNode.value = "";
    },
    render() {
        var { id, ...other } = this.props;
        return (
            <header id="header">
                <form onSubmit={this._onSubmit}>
                    <input
                        placeholder="What needs to be done?"
                        {...other}
                        type="text"
                        autoFocus={true}
                        ref="todoInput"
                        className="todo-input"
                    />
                </form>
            </header>
        )
    }
});

module.exports = TodoHeader;
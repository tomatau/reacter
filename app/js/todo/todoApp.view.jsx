var React = require('react')
    ,TodoHeader = require('./todoHeader.view.jsx')
    ,TodoMain = require('./todoMain.view.jsx')
    ;

var TodoStore = require('./todoStore.js');

function _getState(){
    return {
        todos: TodoStore.getAll()
    };
}

var TodoApp = React.createClass({
    getInitialState(){
        return _getState();
    },
    render() {
        return (
            <div class="todo-app">
                <TodoHeader />
                <TodoMain todos={this.state.todos} />
                <button>Active</button>
                <button>Complete</button>
                <button>Incomplete</button>
            </div>
        )
    }
});

module.exports = TodoApp;
var React = require('react')
    ,TodoHeader     = require('./todoHeader.view.jsx')
    ,TodoMain       = require('./todoMain.view.jsx')
    ,TodoFooter     = require('./todoFooter.view.jsx')
    ;

var TodoStore = require('./todoStore.js');

function _getState(){
    console.log('GET STATE')
    return {
        todos: TodoStore.getAll()
    };
}

// Controller View
var TodoApp = React.createClass({
    mixins: [TodoStore.mixin],
    getInitialState(){
        return _getState();
    },
    onChange(){
        this.setState(_getState());
    },
    render() {
        return (
            <div class="todo-app">
                <TodoHeader />
                <TodoMain todos={this.state.todos} />
                <TodoFooter todos={this.state.todos} />
            </div>
        )
    }
});

module.exports = TodoApp;
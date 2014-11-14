var React = require('react');

var TodoStore = require('./todoStore.js')

function _getState(){
    return {
        todos: [
{ text: "Some text", complete: false, id: 0 },
{ text: "Another todo", complete: false, id: 1 },
{ text: "Blah blah blah blah", complete: false, id: 2 },
{ text: "Checkedy check yo What 'suppp", complete: false, id: 3 },
{ text: "Blub blug blud bbbluuudb blub", complete: false, id: 4 }
        ]
    };
}

var TodoList = React.createClass({
    getInitialState(){
        return _getState();
    },
    render() {
        return (
        <div class="todo-app">
            <ul class="todos">
                { this.state.todos.map(function(todo, index){
                    return <li>{todo.text}</li>
                }) }
            </ul>
            <button>Active</button>
            <button>Complete</button>
            <button>Incomplete</button>
        </div>
        )
    }
});

module.exports = TodoList;
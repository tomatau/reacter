var React = require('react')
    ,TodoItem = require('./todoItem.view.jsx');

// var TodoStore = require('./todoStore.js');

var TodoMain = React.createClass({
    propTypes: {
        todos: React.PropTypes.object.isRequired
    },
    render() {
        return (
            <section class="todo-main">
                <ul class="todos">
                    { this.props.todos.map(function(todo, index){
                        return <TodoItem key={todo.id} todo={todo} />
                    }) }
                </ul>
            </section>
        )
    }
});

module.exports = TodoMain;
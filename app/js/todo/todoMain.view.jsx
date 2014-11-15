var React = require('react');


var TodoMain = React.createClass({
    render() {
        return (
            <section class="todo-main">
                <ul class="todos">
                    { this.props.todos.map(function(todo, index){
                        return <li>{todo.text}</li>
                    }) }
                </ul>
            </section>
        )
    }
});

module.exports = TodoMain;
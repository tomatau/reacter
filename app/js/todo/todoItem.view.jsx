var React = require('react');

var TodoActions = require('./todoActions.js');
var Modal = require('react-modal');

var TodoItem = React.createClass({
    propTypes: {
        todo: React.PropTypes.object.isRequired
    },
    getInitialState() {
        return { modalIsOpen: false };
    },
    openModal() {
        this.setState({modalIsOpen: true});
    },
    closeModal() {
        this.setState({modalIsOpen: false});
    },
    onDestroyClick() {
        TodoActions.removeTodo(this.props.todo.id)
            .then(function(){
                console.log('Success! - Closing modal');
                this.closeModal();
            }.bind(this));
    },
    render() {
        var todo = this.props.todo;
        return (
            <li key={todo.id}>
                <label>
                {todo.text}
                </label>&nbsp;
                <button onClick={this.openModal} className="destroy">
                    x
                </button>
                <Modal isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}>
                    <button onClick={this.onDestroyClick}>
                        Confirm
                    </button>
                </Modal>
            </li>
        )
    }
});

module.exports = TodoItem;
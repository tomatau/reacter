var React = require('react');

var TodoHeader = React.createClass({
    _onSubmit(e){
        e.preventDefault();
    },
    render() {
        return (
            <header id="header">
                <form onSubmit={this._onSubmit}>
                    <input type="text"
                        autoFocus={true}
                        className="todo-input" />
                </form>
            </header>
        )
    }
});

module.exports = TodoHeader;
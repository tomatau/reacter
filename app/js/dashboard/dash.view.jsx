var React = require('react');

var Dashboard = React.createClass({
    status: true,
    getInitialState(){
        return {thing: "thing"};
    },
    onClick() {
        this.setState({thing: this.status ? "OMG" : "wow"});
        this.status = !this.status;
    },
    render() {
        var lol = `Thing ${this.state.thing} with some extra stuffs`;
        return (<p onClick={this.onClick}>{lol}</p>);
    }
});

module.exports = Dashboard;
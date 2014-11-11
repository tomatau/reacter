var React = require('react');

var ExampleApp = React.createClass({
    render() {
        var thing = "THINGO";
        var lol = `Thing ${thing} with some extra stuffs`;
        return <p>{lol}</p>;
    }
});

module.exports = ExampleApp;
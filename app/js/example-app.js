import React from 'react';

var ExampleApp = React.createClass({
    render() {
        var thing = "THINGO";
        var lol = `Thing ${thing} with some extra stuffs`;
        return <p>{lol}</p>;
    }
});

export default ExampleApp;
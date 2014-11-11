// var Another = require("./another.js");
import Another from './another.js';
import React from 'react';

var ExampleApp = React.createClass({
    render() {
        var thing = "THINGO";
        var lol = `Thing ${thing} with some extra stuffs`;
        return <p>{lol}</p>;
    }
});

var what = {
    something: () => {
        console.log(Another());
    }
}


document.write('It worked.');
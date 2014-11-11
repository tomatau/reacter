var what = require('./what.js');
var React = require('react');

require([ "./example-app.js" ], function(ExampleApp) {
    React.render(<ExampleApp />, document.querySelector("body"));
});

document.write('It worked.');
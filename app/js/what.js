var Another = require('./another.js');

var what = {
    something: () => {
        console.log(Another());
    }
};

module.exports = what;
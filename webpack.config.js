const roots = {
    base: "./app",
};

const paths = {
    js: roots.base + "/js"
};

module.exports = {
    context: __dirname,
    entry: paths.js + "/entry",

    output: {
        path: __dirname,
        filename: paths.js +  "/app.js"
    },
    // externals: [{'react': 'React', 'jquery': '$'}],

    cache: true,

    module: {
        loaders: [
            { test: /\.js$/, loaders: ["es6", "jsx?harmony"] }
        ]
    }
}
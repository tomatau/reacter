var webpack = require("webpack");

const roots = {
    base: __dirname + "/app",
    bundle: __dirname + "/bundle",
};

const paths = {
    js: roots.base + "/js"
};

module.exports = {
    context: __dirname,
    entry: paths.js + "/entry",

    output: {
        path: roots.bundle,
        publicPath: "/assets/",
        filename: "app.bundle.js",
        chunkFilename: "[hash].chunk.js"
    },
    // externals: [{'react': 'React', 'jquery': '$'}],

    cache: true,

    module: {
        loaders: [
            { test: /\.js$/, loaders: ["es6", "jsx?harmony"] }
        ]
    },

    plugins: [ new webpack.optimize.CommonsChunkPlugin("common.js") ]
}
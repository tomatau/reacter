var webpack = require('webpack');
var path = require('path');

const roots = {
    base: path.join(__dirname, 'app'),
    bundle: path.join(__dirname, 'bundle'),
};

const paths = {
    js: path.join(roots.base, 'js'),
};

module.exports = {
    context: __dirname,
    entry: path.join(paths.js, 'entry'),
    // devtool: 'source-map',
    target: 'web',

    output: {
        path: roots.bundle,
        publicPath: '/assets/', // messes up easily
        filename: 'app.bundle.js',
        chunkFilename: '[hash].chunk.js'
    },
    // externals: [{'react': 'React', 'jquery': '$'}],
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"],
    },

    cache: true,

    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['es6', 'jsx?harmony'] }
        ],
        noParse: /\.min\.js/
    },

    devServer: {
        contentBase: "./app",
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        // new webpack.optimize.UglifyJsPlugin()
        // new webpack.optimize.DedupePlugin()
    ]
}
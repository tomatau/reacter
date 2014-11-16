var webpack = require('webpack');
var path = require('path');

const roots = {
    base: path.join(__dirname, 'app'),
    bundle: path.join(__dirname, 'bundle'),
};

const paths = {
    js: path.join(roots.base, 'js'),
};

/*
open http://localhost:8080/webpack-dev-server/
 */

module.exports = {
    context: __dirname,
    entry: [
        'webpack/hot/dev-server',
        path.join(paths.js, 'entry')
    ],
    // devtool: 'source-map',
    target: 'web',

    output: {
        path: roots.bundle,
        publicPath: '/assets/', // messes up easily
        filename: 'app.bundle.js',
        chunkFilename: '[hash].chunk.js',
    },
    // externals: [{'react': 'React', 'jquery': '$'}],
    resolve: {
        extensions: ["", ".js", ".jsx"],
        alias: {
            // mcfly: 'mcfly/src/McFly'
        }
    },

    watch: true,

    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['react-hot', 'es6', 'jsx?harmony'] }
        ],
        noParse: /\.min\.js/
    },

    devServer: {
        contentBase: "./app",
        hot: true,
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.HotModuleReplacementPlugin()
        // new webpack.optimize.UglifyJsPlugin()
        // new webpack.optimize.DedupePlugin()
    ]
}
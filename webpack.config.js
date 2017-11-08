const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        filename: './public/js/app/app.js'
    },
    output: {
        filename: './public/js/build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules(?!\/webpack-dev-server)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ['es2015', { modules: false }]
                    ]
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false },
            sourceMap: true
        })
    ]
}
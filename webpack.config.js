const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        filename: './public/src/js/app/app.js'
    },
    output: {
        filename: './public/dist/js/bundle.js'
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
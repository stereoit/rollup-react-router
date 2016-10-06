const {resolve} = require('path')

module.exports = {
    entry: "./main.js",
    output: {
        path: resolve(__dirname, 'app'),
        filename: "./bundle.js"
    },
    context: resolve(__dirname, 'app'),
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};

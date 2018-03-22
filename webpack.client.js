const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const config = {
    entry: {
        app: [
            './src/client/client.js',
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public', 'dist', 'js'),
        filename: "[name].js"
    }
};

module.exports = merge(baseConfig, config);

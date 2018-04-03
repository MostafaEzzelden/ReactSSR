const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');
const config = {
    target: 'node',
    entry: {
        bundle: [
            './src/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    externals: [
        webpackNodeExternals()
    ],
};
module.exports = merge(baseConfig, config);

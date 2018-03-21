const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const config = {
    entry: {
        main: [
            './src/client/client.js',
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: "[name].js"
    }
};

module.exports = merge(baseConfig, config);

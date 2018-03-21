const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const isProduction = true;

module.exports = {
    module: {
        rules: [{
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    options: {
                        presets: [
                            'react',
                            'stage-0', ['env', {
                                targets: {
                                    browsers: ['last 2 versions']
                                }
                            }]
                        ]
                    }
                }
                //     , {
                //         test: /\.s[ac]ss$/,
                //         use: ExtractTextPlugin.extract({
                //             use: ["css-loader", "sass-loader"],
                //             fallback: "style-loader"
                //         })
                //     }, {
                //         test: /\.css$/,
                //         use: ExtractTextPlugin.extract({
                //             use: "css-loader",
                //             fallback: "style-loader"
                //         })
                //     }, {
                //         test: /\.(svg|eot|ttf|woff|woff2)$/,
                //         use: "file-loader"
                //     }, {
                //         test: /\.(png|jpe?g|gif)$/,
                //         loaders: [{
                //                 loader: "file-loader",
                //                 options: {
                //                     name: 'img/[name].[hash].[ext]'
                //                 }
                //             },
                //             "img-loader"
                //         ]}
            ]
            // },
            // plugins: [
            //     new CleanWebpackPlugin(['dist'], {
            //         root: path.join(__dirname, 'public'),
            //         verbose: true,
            //         dry: false
            //     }),
            //     new ExtractTextPlugin("[name].css"),
            //     new PurifyCSSPlugin({
            //         paths: glob.sync(path.join(__dirname, 'public/dist/*.html')),
            //         minimize: isProduction
            //     }),
            //     new webpack.LoaderOptionsPlugin({
            //         minimize: isProduction
            //     })
            // ]
    }
}

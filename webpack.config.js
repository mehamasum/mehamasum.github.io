require('dotenv').config();

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { getProjects, getWorks } = require('./src/ssr');


module.exports = {
    entry: './src/runtime.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateParameters: {
                homepage: process.env.HOMEPAGE || 'https://mehamasum.github.io/',
                projects: getProjects(),
                works: getWorks(),
                year: new Date().getFullYear()
            },
            template: 'public/index.ejs'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public', 
                    globOptions: {
                        ignore: ['*.ejs'],
                    },
                }
            ]
        })
    ]
};
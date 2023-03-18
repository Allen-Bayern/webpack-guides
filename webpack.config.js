const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

const HtmlWepbackPlugin = require('html-webpack-plugin');

const assigned = {
    mode: 'development',
    devtool: 'inline-source-map',
};
const title = 'Development';

module.exports = {
    ...assigned,
    devServer: {
        static: './dist',
        port: 8888,
    },
    entry: {
        // index: {
        //     import: './src/index.js',
        //     dependOn: 'shared',
        // },
        // print: './src/print.js',
        // another: {
        //     import: './src/another-module.js',
        //     dependOn: 'shared',
        // },
        // shared: 'lodash',
        index: './src/index.js',
    },
    plugins: [
        new HtmlWepbackPlugin({
            title,
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    optimization: {
        // runtimeChunk: 'single',
        // splitChunks: {
        //     chunks: 'all'
        // }
    },
    module: {
        rules: [
            // load css
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // load pics
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: 'asset/resource',
            },
            // load fonts
            {
                test: /\.(woff2?|eot|[ot]tf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.[ct]sv$/i,
                use: ['csv-loader']
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader']
            },
            {
                test: /\.toml$/i,
                type: 'json',
                parser: {
                    parse: toml.parse,
                }
            },
            {
                test: /\.ya?ml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse,
                }
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse,
                }
            },
        ],
    },
};

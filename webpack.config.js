const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
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

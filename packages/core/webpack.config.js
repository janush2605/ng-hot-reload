// @ts-nocheck
/* eslint-env node */
const path = require('path');
const webpack = require('webpack');

const config = {
    mode: 'development',
    devtool: "source-map",
    entry: {
        'ng-hot-reload-core': path.join(__dirname, 'src', 'index.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: 'ngHotReloadCore',
        // libraryTarget: 'umd',
        libraryTarget: 'commonjs',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['babel-preset-es2015',
                            {exclude: /node_modules/}
                        ]]
                    }
                }
            },
            // {
            //     test: /\.js$/,
            //     use: {
            //         loader: 'eslint-loader',
            //         options: {
            //             exclude: /node_modules/
            //         }
            //     }
            // },
        ],
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            'node_modules',
        ],
        extensions: ['.js'],
    },
    plugins: [
        new webpack.DefinePlugin({
            TESTING: false,
        })
    ]
};

module.exports = config;

var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './webpack-example/index.js',
        './node_modules/angular/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: [
                    {
                        loader: 'ng-hot-reload-loader',
                        options: {
                            exclude: /node_modules/
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: ['babel-preset-es2015']
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hot: true,
    },
};

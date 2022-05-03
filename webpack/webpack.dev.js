const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
    mode: 'development',

    entry:
    {
        index: [path.resolve('src', 'frontend', 'pages', 'index', 'index.js'), hotMiddlewareScript]
    },

    output:
    {
        filename: '[name].bundle.js',
        path: path.resolve('_build'),
        publicPath: '/',
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.(jpe?g|png|svg)$/,
                type: 'asset/resource'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: path.resolve('src', 'frontend', 'pages', 'index', 'index.html'),
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
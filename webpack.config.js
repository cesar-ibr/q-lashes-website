const Path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/App.jsx',
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.((c|sa|sc)ss)$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
            {
                test: /\.(mp4|png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
        alias: {
            '~': Path.resolve(__dirname, './src'),
            '@': Path.resolve(__dirname, './node_modules'),
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};

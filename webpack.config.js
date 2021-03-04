const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        compress: true,
        open: true,
        port: 2222,
    },
    module: {
        rules: 
        [
            // Babel Loader with plugins
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },

            // CSS + sass Loader
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // instead of "style-loader",
                    'css-loader',
                    'sass-loader'
                ],
            },

            // HTML loader 
            {
                test: /\.html$/i,
                use: 'html-loader',
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]
};
  
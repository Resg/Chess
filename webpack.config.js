const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const outPath = path.join(__dirname, '/dist');

module.exports = {
    entry: {
        main: './src/main.tsx',
            // './src/main.scss',
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-dom',
            'redux',
        ]
    },
    output: {
        path: outPath,
        publicPath: `/${process.env.NODE_ENV === 'development' ? '' : 'redesign/'}`,
        filename: '[name].bundle.js'
    },

    target: 'web',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        mainFields: ['browser', 'main'],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                loader: 'ts-loader'
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['react']
                    // }
                },
            },
            {test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {loader: 'url-loader?limit=10000'},
                ],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        hot: true,
        port: 8000,
    },
    watch: true,
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            // minRemainingSize: 0,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 6,
            maxInitialRequests: 4,
            automaticNameDelimiter: '~',
            automaticNameMaxLength: 30,
            cacheGroups: {
                vendors: {
                    name: 'vendor',
                    filename: 'vendor.bundle.js',
                },
                default: {
                    name: 'vendor',
                    filename: 'vendor.bundle.js',
                    minChunks: Infinity
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
        }),

        new CopyWebpackPlugin([
            {from: path.join(__dirname, 'src/assets'), to: path.join(outPath, 'assets')},
        ]),
        new webpack.HotModuleReplacementPlugin(),
        // new ServiceWorkerWebpackPlugin({
        //     entry: path.join(__dirname, 'src/sw.js'),
        //     // excludes: ['**/.*', '**/*.map', '*.html'],
        //
        // }),
    ],
    node: {
        fs: 'empty',
        net: 'empty',
    },
};
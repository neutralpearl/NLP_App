const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    output: {
        libraryTarget: "var",
        library: "Client",
    },
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    devServer: {
        port: 8080, // change this to run dev server elsewhere; note that Express server runs on 8081
        proxy: { 
            '/get-key': 'http://localhost:8081', // not working
          }
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        // ecommended fix for webpack 5 not polyfilling "process" in browser environment
        new webpack.DefinePlugin({
            // 'process.env.NODE_ENV': JSON.stringify('development')
            'process.env': JSON.stringify('process.env')
         })
    ]
}

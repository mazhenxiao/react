const path = require("path");
const webpack =require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = {
    entry: {
        main: path.join(__dirname,'/content/js/main.js')
    },
    output: {
        filename: '[name]-thunk.js',
        path: path.join(__dirname,'/content/dist/js/'),
        publicPath: path.join(__dirname,'/content/dist/')
    },
    module: {
        rules: [
           {
                test: /\.js$/,
              //  exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env',"react"]
                    }
                }
       
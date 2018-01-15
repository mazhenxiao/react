const path = require("path");
const webpack =require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const compress = require("webpack/lib/optimize/UglifyJsPlugin"); //压缩
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin"); //thunk
const extractLess = new ExtractTextPlugin({
    filename: "../css/[name].less.css"  //如果带路径则在此路径下生成
});

const config = {
    entry: {
        main: path.join(__dirname,'/content/js/main.js')
    },
    output: {
        filename: '[name]-thunk.js',
        path: path.join(__dirname,'/content/dist/js/'),
        chunkFilename: 'chunk-[name].js'
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
           },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader",
                        options:{
                            minimize: true,
                            sourceMap: true
                        }
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development 
                    fallback: "style-loader"
                })
            }
            
            
        ]
    },
    plugins:[
        new CommonsChunkPlugin({
            name: "chunk",
            minChunks: 2
        }),
        extractLess,
        new compress({
            output: {
                comments: false,   // remove all comments
            },
            compress: {
                warnings: false
            }
        })
    ]
};
module.exports = config;
const {smart} = require('webpack-merge');
const base = require('./webpack.config.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = smart(base, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        // 压缩 css 文件
        new OptimizeCssPlugin(),
        new webpack.DefinePlugin({
            DEV: JSON.stringify('production') //字符串
        })
        
    ]
    
});
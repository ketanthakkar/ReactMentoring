const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  context: path.join(__dirname, "src"),
  entry: "./",
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: ['style-loader','css-loader']
    }
  ]
},
plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, "./src/index.html") }),
    new ExtractTextPlugin("[name].css"),
    new webpack.HotModuleReplacementPlugin()
    ]
};

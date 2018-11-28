const webpack = require('webpack');
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

export default {
  devtool: 'cheap-module-eval-source-map',
  entry: "./src/index.js",
  target: 'web',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
          loader: 'babel-loader',
          options: {
              presets: ['@babel/preset-react']
          }
      }
  }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract(
          {
              fallback: 'style-loader',
              use: ['css-loader']
          }
      )
  }
  ]
},
plugins: [
  new HtmlWebPackPlugin({
      hash: true,
      filename: "index.html",  //target html
      template: "./src/index.html" //source html
  }),
  new ExtractTextPlugin({ filename: 'css/style.css' })
]
}

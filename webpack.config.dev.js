import path from 'path';

export default {
  entry: [path.resolve(__dirname, 'src/index.js')],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']}
    ]
  }
}

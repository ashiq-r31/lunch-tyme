module.exports = {
  entry: './src/App.jsx',
  output: {
    path: 'static/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
}

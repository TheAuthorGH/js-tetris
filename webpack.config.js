module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.css'],
  },
  module: {
    rules: [
      {test: /\.css$/, use: 'css-loader'}
    ]
  }
};
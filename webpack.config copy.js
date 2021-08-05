const path = require('path');
const { webpack } = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          "less-loader",
        ]
      }
    ]
  },
  plugins: [
    new webpack.SpeedMeasurePlugin(),
  ],
};

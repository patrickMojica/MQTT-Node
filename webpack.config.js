const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',  // entry point for the app
  output: {
    path: path.resolve(__dirname, 'dist'), // output directory
    filename: 'bundle.js',  // bundled file
  },
  module: {
    rules: [
      {
        //test: /\.js$/,  // transpile all .js files
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // handle CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',  // HTML template
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),  // serve files from dist directory
    port: 3001,  // React dev server runs on this port
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
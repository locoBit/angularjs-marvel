const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.pug'
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 5000,
      server: { baseDir: ['bin'] }
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "apply-loader!pug-loader?self"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  devtool: "#inline-source-map"
};

const { merge } = require('webpack-merge');
const path = require('path');
const base = require('./webpack.common.config');

module.exports = merge(base, {
  mode: "production",
  devtool: false,
  entry: path.resolve(__dirname, "../components/index.ts"),
  output: {
    path: path.resolve(__dirname, "../lib/"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  externals: ["vue"],
});

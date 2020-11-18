const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader')

const isDev = process.env.NODE_ENV === 'development';
const scssRegex = /\.(scss)$/;
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.ts|js$/,
        exclude: /node_modules/,
        use: ['thread-loader', 'babel-loader'],
        include: path.resolve(__dirname, '../components'),
      },
      {
        test: scssRegex,
        include: [path.resolve(__dirname, '../components')],
        use: [
          {
            loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 3,
              modules: false,
              sourceMap: isDev,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                javascriptEnabled: true,
              },
              sourceMap: isDev,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "main.min.css",
    }),
  ],
  resolve: {
    extensions: ['.vue', 'scss', '.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ],
  }
};

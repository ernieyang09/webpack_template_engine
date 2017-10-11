const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
import data  from './src/test1/config.js';

const config = {
  devtool: "source-map",
  entry: {
    index: './src/test1/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use:[

        {
          loader: 'ejs-html-loader',
          options: {
            title: 'The Ant: An Introduction',
            season: 1,
            episode: 9,
            production: process.env.ENV === 'production',
            context: data
          }
        },
        { loader: 'html-loader' }
      ]
      },
      {
        loader:'babel-loader',
        test: /\.js/,
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/test1/test1.ejs'
    })
  ],
  devServer:{
    port:3034,
    publicPath: "/",
    contentBase:'./src',
    inline:true,
  }
}

export default config;

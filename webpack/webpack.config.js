const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCssPlugin = require("purifycss-webpack");
module.exports = {
  entry: {
    entry: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:8081/'
  },
  plugins: [
    new ExtractTextPlugin("css/main.css"),
    new PurifyCssPlugin({
      paths: glob.sync(path.join(__dirname, 'src/*html'))
    }),
    new HtmlWebpackPlugin({
      minify: {
        removeAttributeQuotes: true
      },
      hash: true,
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 500,
            outputPath: 'images/'
          }
        }]
      }, {
        test: /\.html$/,
        loader: 'html-withimg-loader'
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader",
            options: { importLoaders: 1 }
          }, 'postcss-loader']
        })
      },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }],
          fallback: 'style-loader'
        })
      },{
        test:/\.(jsx|js)$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:[
              ("@babel/preset-env")
            ]
          }
        },
        exclude:/node_modules/

      }

    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    host: "localhost",
    compress: true,
    port: "8081"
  }
}

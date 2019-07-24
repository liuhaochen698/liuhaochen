const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports= {
    entry:{
        entry:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath: 'http://localhost:8081/'
    },
    plugins:[
    new ExtractTextPlugin("css/main.css"),
    new HtmlWebpackPlugin({  
      minify:{
        removeAttributeQuotes:true
      },
      hash:true,
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  module:{
    rules:[
        {
        test:/\.css$/,
        use:ExtractTextPlugin.extract({
            fallback:"style-loader",
            use:"css-loader"
        }) 
        },{
            test:/\.(png|jpg|gif)$/,
            use:[{
                loader:'url-loader',
                options:{
                    limit:500,
                    outputPath:'images/'
                }
            }]
        },{
          test:/\.html$/,
          loader:'html-withimg-loader'
        }
        
    ]
  },
  devServer:{
    contentBase:path.resolve(__dirname,"dist"),
    host:"localhost",
    compress:true,
    port:"8081"
  }
}

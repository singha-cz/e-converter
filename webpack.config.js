var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './build')
   },      
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader"
            }
         },
         {
            test: /\.html$/,
            use: [
               {
                  loader: "html-loader"
               }
            ]
         },
         {
            test: /\.css$/,
            use:  ['style-loader', 'css-loader']
         }
      ]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: "./public/index.html",
         filename: "./index.html"
      })
   ]
};
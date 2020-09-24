const path = require('path');

module.exports = {
mode: 'development',
entry: "./src/index.js",
output: {  
  filename: "dist/bundle.js" // dist/ 
},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, ""),
    port: 3000,
    open: true,
    historyApiFallback: true
  },
  watch: true
}
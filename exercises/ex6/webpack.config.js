//  Este paquete sirve para resolver rutas en cualquier sistema operativo
const path = require("path");

//  Este objeto que exportamos es lo que webpack va a leer
//  La sintaxis que ves es un objeto de JavaScript
const webpack = require("webpack");
module.exports = {
  entry: path.resolve(__dirname, "./src/js/App.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "app.min.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    port: 3000,
    hot: true
  }
};

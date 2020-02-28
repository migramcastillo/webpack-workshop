const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/js/App.js",
  mode: "development",
  output: {
    path: __dirname + "/dist",
    filename: "app.[hash:8].min.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    compress: true,
    publicPath: "/",
    hot: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
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
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: isProduction
    ? {
        minimize: true,
        minimizer: [new TerserPlugin()]
      }
    : {}
};

//  Este paquete sirve para resolver rutas en cualquier sistema operativo
const path = require("path");

//  Este objeto que exportamos es lo que webpack va a leer
//  La sintaxis que ves es un objeto de JavaScript
module.exports = {
  entry: path.resolve(__dirname, "./src/js/index.js"),
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
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    port: 3000
  }
};

const path = require("path");

module.exports = {
  entry: "src/index.js",
  target: "node",
  mode: "development",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].js",
    clean: true,
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

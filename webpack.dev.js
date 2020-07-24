const path = require("path");
const common = require("./webpack.common");

const { merge } = require("webpack-merge");
const HtmlWebPackPlugin = require("html-webpack-plugin");

// Get environment variables to inject into our app.

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundel.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
});

const path = require("path");

// Get environment variables to inject into our app.

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/assets/vendor.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        ///\.(svg|png|jpg|gif|ico|eot)$/,
        test: /\.(png|jpg|gif|ico|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
          },
        },
      },
    ],
  },
};

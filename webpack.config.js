const path = require("path");
const PugPlugin = require("pug-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");

module.exports = {
  plugins: [
    new PugPlugin({
      entry: {
        // define many page templates here
        navMenu: "src/modules/nav-menu.pug", // => dist/nav-menu.html
        product: "src/modules/product.pug", // => dist/product.html
        index: "src/index.pug", // => dist/index.html
      },
      js: {
        // JS output filename
        filename: "js/[name].[contenthash:8].js",
      },
      css: {
        // CSS output filename
        filename: "css/[name].[contenthash:8].css",
      },
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ["dist"],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      images: path.resolve(__dirname, "src/images"),
    },
    extensions: ["*", ".js", ".jsx", ".css", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.(s?css|sass)$/,
        use: ["url-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
      {
        test: /\.(ico|png|jp?g|webp|svg)$/i,
        type: "asset/resource",
        generator: {
          // filename: "images/[name].[hash:8][ext][query]",
          filename: "images/[name].[ext][query]",
        },
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    watchFiles: path.join(__dirname, "src"),
    port: 9000,
  },
};

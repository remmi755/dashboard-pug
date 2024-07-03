const path = require("path");
const PugPlugin = require("pug-plugin");

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
  ],
  resolve: {
    alias: {
      images: path.resolve(__dirname, "src/images/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(s?css|sass)$/,
        use: ["css-loader", "sass-loader", "postcss-loader"],
      },
      {
        test: /\.(ico|png|jp?g|webp|svg)$/,
        type: "asset/resource",
        generator: {
          // filename: "images/[name].[hash:8][ext][query]",
          filename: "images/[name].[ext][query]",
        },
      },
    ],
  },
};

/* eslint-env node */

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import("webpack").Configuration} */
module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    main: "./src/js/main.js",
    // member: "./src/ts/member.tsx",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./js/[name]-[contenthash].bundle.js",
    publicPath: "/",
    clean: true,
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "./src"),
      path.resolve(__dirname, "./node_modules"),
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/i,
        exclude: /node_modules/,
        use: [{ loader: "ts-loader" }],
      },
      {
        test: /\.js(x?)$/i,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.(css|sass|scss)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "./img/[name]-[contenthash][ext]",
        },
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
            },
          },
        ],
      },
      {
        test: /\.pug$/i,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name]-[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/template/index.pug",
      filename: "./index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/template/access.pug",
      filename: "./access.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/template/members/taro.pug",
      filename: "./members/taro.html",
    }),
  ],
};

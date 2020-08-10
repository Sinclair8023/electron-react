"use strict";

process.env.BABEL_ENV = "renderer";

const path = require("path");
const { dependencies } = require("../package.json");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BabiliWebpackPlugin = require("babili-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let rendererConfig = {
  devtool: "#cheap-module-eval-source-map",
  entry: {
    renderer: path.join(__dirname, "../src/renderer/main.ts")
  },
  externals: [
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            }
          },
          {
            loader: 'ts-loader',
            options: {
              onlyCompileBundledFiles: true,
              transpileOnly: true,
            }
          }
        ]
      },
      {
        test: /\.node$/,
        use: "node-loader"
      },
      {
        test: /\.less$/,
        include: path.join(__dirname, "../src"),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'less-loader',
        ]
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, "../src"),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          }
        ]
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, "../node_modules"),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: "url-loader",
          query: {
            limit: 10000,
            name: "imgs/[name]--[folder].[ext]"
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "media/[name]--[folder].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: "url-loader",
          query: {
            limit: 10000,
            name: "fonts/[name]--[folder].[ext]"
          }
        }
      }
    ]
  },
  node: {
    __dirname: process.env.NODE_ENV !== "production",
    __filename: process.env.NODE_ENV !== "production"
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../src/index.ejs"),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      },
      nodeModules:
        process.env.NODE_ENV !== "production"
          ? path.resolve(__dirname, "../node_modules")
          : false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
    filename: "[name].js",
    libraryTarget: "commonjs2",
    path: path.join(__dirname, "../dist/electron")
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "../src/renderer")
    },
    extensions: [".js", ".json", ".css", ".less", ".node", ".ts", ".tsx"]
  },
  target: "electron-renderer"
};

/**
 * Adjust rendererConfig for development settings
 */
if (process.env.NODE_ENV !== "production") {
  rendererConfig.plugins.push(
    new webpack.DefinePlugin({
      __static: `"${path.join(__dirname, "../static").replace(/\\/g, "\\\\")}"`
    })
  );
}

/**
 * Adjust rendererConfig for production settings
 */
if (process.env.NODE_ENV === "production") {
  rendererConfig.devtool = "";

  rendererConfig.plugins.push(
    new BabiliWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "../static"),
        to: path.join(__dirname, "../dist/electron/static"),
        ignore: [".*"]
      }
    ]),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  );
}

module.exports = rendererConfig;

const path = require("path");
var webpack = require("webpack");

module.exports = {
  // the entry file for the bundle
  entry: {
    path: path.join(__dirname, "./client/src/app.js")
  },

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
  },

  module: {
    // apply loaders to files that meet given conditions
    loaders: [
      {
        test: /\.(js)?$/,
        include: path.join(__dirname, "./client/src"),
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-decorators-legacy", "transform-class-properties"]
        }
      },
      // css
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      // static assets
      { test: /\.html$/, use: "html-loader" },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        exclude: /node_modules/,
        loader: "file-loader"
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: "FontMin-loader",
        query: {
          limit: 10240,
          ext: "woff",
          name: "fonts/[name]",
          text: "helloworld"
        }
      },
      {
        test: /\.json$/,
        loaders: ["json-loader"]
      }
    ]
  },
  watch: true
};

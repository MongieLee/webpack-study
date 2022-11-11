const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const MPlugin = require('./src/plugins/mPlugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    "filename": "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    assetModuleFilename: "img/[name].[hash:8].[ext]"
  },
  // watch: true,
  devServer: {
    open: true,
    port: 8888,
    proxy: {
      "/api": {
        target: "http://192.168.8.58:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        },
      }
    },
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"]
              }
            }
          }
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024
          }
        }
      },
      {
        test: /\.js?$/i,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: ["@babel/preset-env", "@babel/preset-react"]
          // }
        }
      },
      {
        test: /\.vue$/i,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      BASE_URL: '"./"',
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack好难",
      template: "index.html"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/index.html"]
          }
        }
      ]
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".vue"],
    alias:{
      "@":
    }
  }
}

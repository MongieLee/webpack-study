const path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    "filename": "bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        // loader:"css-loader", // 写法一
        // use: ["css-loader"], // 写法二
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "postcss-preset-env"
                ]
              }
            }
          },
          { loader: "less-loader" },
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            // name: "img/[name].[hash:8].[ext]" // 会创建img文件夹
            name: "[name].[hash:8].[ext]",
            outputPath: "img"
          }
        },
        type: 'javascript/auto'
      }
    ]
  }
}
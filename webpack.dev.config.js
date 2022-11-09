const baseConfig = require("./webpack.config")

module.exports = {
  mode: "development",
  ...baseConfig,
  devServer: {
    contentBase: "./dist"
  }
}
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [path.join(__dirname, "src/index.js")],
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.bundle.js',
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader:"babel-loader",
            options: { presets: [ [ 'es2015', { modules: false } ] ] }
          }
       ]

      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code: true,
        warnings: false
      }
    })
  ]
};

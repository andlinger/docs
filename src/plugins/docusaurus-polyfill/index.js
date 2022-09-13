const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

// eslint-disable-next-line
module.exports = function (context, options) {
  return {
    name: "docusaurus-polyfill",
    // eslint-disable-next-line
    configureWebpack(config, isServer, utils) {
      const plugins = [
        new NodePolyfillPlugin(),
      ]

      if (isServer) {
        // plugins.push(new webpack.DefinePlugin({
        //   'process.env': 'process.env'
        // }))
      }
      return {
        plugins,
      }
    },
  }
}

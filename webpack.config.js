var webpack = require('webpack')
var jquery = require('jquery')
 
module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
}
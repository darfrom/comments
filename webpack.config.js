const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const {VueLoaderPlugin} = require('vue-loader')

const cssLoader = {
    loader: 'css-loader',
    options: {
        esModule: false
    }
}

module.exports = {
  mode: process.env.WEBPACK_DEV_SERVER ? "development" : "production",
  resolve:{
    alias: {
      styles: path.resolve(__dirname,'src', 'styles'),
      assets: path.resolve(__dirname,'assets'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          cssLoader,
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          cssLoader,
          'stylus-loader'
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, './dist'),
      open: true,
      compress: true,
      hot: true,
      port: 8080,
  },
  entry: {
      main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Template',
          template: path.resolve(__dirname, './src/template.html'),
          filename: 'index.html',
          favicon: 'assets/favicon.ico',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
	      __VUE_OPTIONS_API__:   JSON.stringify(true),
	      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
      }),
  ],
}

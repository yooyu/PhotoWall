var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    // context: path.resolve(__dirname, "www"),
    app: "./www/js/index.js"
  },
  devtool:"source-map",
  output: {
    filename: "[name].bundle.js",
    chunkFilename: '[name].[chunkhash:5].chunk.js',
    path: path.resolve(__dirname, 'www/dist')
  },
  module: {
    //加载器配置
    rules: [{
        test: /\.css$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'jsx-loader?harmony'
        }]
      },
      {
        test: /\.(png|jpg)$/,
        use: [{
          loader: 'url-loader?limit=8192'
        }]
      },
      {
        test: /\.js|jsx$/,
        use: [{
            loader: 'react-hot-loader'
          },
          {
            loader: 'babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0'
          }
        ],
        include: path.join(__dirname, 'js')
      },
      {
        test: /\.js|jsx$/,
        loaders: ['babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0']
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
    modules: ["node_modules"]
  },
  //插件项
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/front/index.ts',
  
  watch: true,

  devtool: 'inline-source-map',

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            // configFileName: 'tsconfig.json',
            appendTsSuffixTo: [/\.vue$/]
          }
        }
      },
      {
        test: /\.js/,
        loaders: ['babel-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
              ts: 'ts-loader'
          },
          esModule: true
        },
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/front/index.html',
    }),
  ],

  devServer: {
    contentBase: './dist',
  }
};
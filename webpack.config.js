const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {                                
    static: {                                 
      directory: path.join(__dirname, "dist"),
    },                                        
  },
  devtool: 'eval-source-map',
  plugins: [
    new ESLintPlugin(),
    new CleanWebpackPlugin({
      verbose: true
    }),
    new HtmlWebpackPlugin({
      title: "Form Checker",
      template: './src/index.html', // If using only one html file
      inject: 'body'
    }),
  ],
  module: {
    rules: [
      { // Use Css
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      { // Use images
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext][query]',
        }
      }, 
      { // Use fonts
        test      : /\.(woff2?|ttf|eot)(\?v=\w+)?$/,
        type      : 'asset/resource',
        generator : {
          filename : 'assets/fonts/[name][ext][query]',
        }
      },
    ]
  }
};

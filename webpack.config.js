const path = require('path'); // CommonJS
const { options } = require('./routes');

module.exports = {
    mode: 'development', // 'development' ou 'production', dependendo do ambiente
  entry: './frontend/main.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        },
        {
            test: /\.css$/,
            use: [
                 'style-loader','css-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: 'Fotos/', 
                    },
                },
            ]
        }
    ]
  },
  devtool: 'source-map',
};
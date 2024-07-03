const path = require('path'); // CommonJS

module.exports = {
  mode: 'production',
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
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            use: [
                {
                    loader: 'file-loader',
                  options: {
                    name: '[name].[hash].[ext]',
                    outputPath: 'images',
                }
                }
            ] 
        }
    ]
},
devtool: 'source-map',
mode: 'development' // ou 'production', dependendo do ambiente
};
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'idnd',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: 'file-loader',
      },
      {
        test: /\.tsx?/,
        use: ["ts-loader"]
      }
    ],
  },
  externals: {
    react: "react"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".css"]
  }
};
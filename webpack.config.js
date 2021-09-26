const path = require('path');
const nodeExternals = require('webpack-node-externals')

const { NODE_ENV = 'development', } = process.env;

module.exports = {
  entry: './src/index.ts',
  mode: NODE_ENV,
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'index.js',
    // clean: true,

    // assetModuleFilename: 'assets/[hash][ext][query]',

    // library: 'sean_obj',
    libraryTarget: 'commonjs2'

    ,publicPath: "/"
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
    ]
  },

  stats: {
    errorDetails: true
  }
}
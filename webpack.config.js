const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const EnvironmentPlugin = require('webpack-env-loader-plugin');

// Constant with our paths
const paths = {
	DIST: path.resolve(__dirname, 'dist'),
	SRC: path.resolve(__dirname, 'src'),
	JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
  mode: 'production',
  entry: path.join(paths.SRC, 'index.js'),
  output: {
	path: paths.DIST,
	filename: 'app.bundle.js',
	publicPath: '/'
  },
  // Tell webpack to use html plugin
  plugins: [
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('production')
		}
	}),
	new HtmlWebpackPlugin({
	  template: path.join(paths.SRC, 'index.html'),
	}),
	new ExtractTextPlugin('style.bundle.css'), // CSS will be extracted to this bundle file -> ADDED IN THIS STEP
  ],
  // Loaders configuration
  // We are telling webpack to use "babel-loader" for .js and .jsx files
  module: {
	rules: [
	  {
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use: [
		  'babel-loader',
		],
	  },
	  // CSS loader for CSS files
	  // Files will get handled by css loader and then passed to the extract text plugin
	  // which will write it to the file we defined above
	  {
		test: /\.scss$/,
		loader: ExtractTextPlugin.extract({
		  use: ['css-loader', 'sass-loader']
		}),
	  },
	  // File loader for image assets -> ADDED IN THIS STEP
	  // We'll add only image extensions, but you can things like svgs, fonts and videos
	  {
		test: /\.(png|jpg|svg|gif|woff|woff2|eot|ttf)$/,
		use: [
		  'file-loader',
		],
	  },
	],
  },
  devServer: {
    historyApiFallback: true,
  },
  // Enable importing JS files without specifying their's extenstion
  //
  // So we can write:
  // import MyComponent from './my-component';
  //
  // Instead of:
  // import MyComponent from './my-component.jsx';
  resolve: {
	extensions: ['.js', '.jsx'],
  },
};
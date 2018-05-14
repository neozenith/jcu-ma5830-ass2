'use strict';
const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		app: [path.resolve(__dirname, 'src/index.js'), 'webpack-hot-middleware/client']
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: []
	},
	plugins: [
		new CopyWebpackPlugin([{ from: 'static' }]),
		new webpack.NamedModulesPlugin(),
		// OccurenceOrderPlugin is needed for webpack 1.x only
		// new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		// Use NoErrorsPlugin for webpack 1.x
		new webpack.NoEmitOnErrorsPlugin()
	]
};

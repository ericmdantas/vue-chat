"use strict";

const path = require('path');

module.exports = {
	entry: './client/dev/index.js',
	output: {
		path: './client/dev/',
		publicPath: '/client/dev/',
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css!'
			},
			{
				test: /\.html$/,
				loader: 'html'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /(node_modules)/
			}
		]
	}
}

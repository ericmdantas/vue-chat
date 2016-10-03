"use strict";

const path = require('path');

module.exports = (env) => {
	return {
		entry: './client/dev/index.js',
		output: {
			path: './client/dev/',
			publicPath: '/client/dev/',
			filename: 'bundle.js'
		},
		module: {
			loaders: [
				{
					test: /\.css$/,
					loader: 'style!css!'
				},
				{
					test: /\.js$/,
					loader: 'babel',
					exclude: /(node_modules)/
				},
				{
					test: /\.html/,
					loader: 'html'
				}
			]
		}
	}
}
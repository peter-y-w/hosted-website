const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		port: '9500',
		static: ['./public'],
		open: true,
		hot: true,
		liveReload: true,
	},
	devtool: 'eval-source-map',
});

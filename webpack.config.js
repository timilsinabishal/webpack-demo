const ExtractTextPlugin = require('extract-text-webpack-plugin')
	path = require('path');
module.exports = {
	entry: {
		path: path.join(__dirname, 'src'),
		bundle:"./src/app.js",
	}
	,
	output: {
		path: path.join(__dirname,'dist'),
		publicPath: "/assets/",
		filename: "bundle.js"
	},
	module: {
		rules: [{
			test: /\/scss$/,
			use:['css-loader', 'sass-loader']
		},
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader']
			})
		}]
	},
	plugins: [
		new ExtractTextPlugin('[name].css')
	]
}

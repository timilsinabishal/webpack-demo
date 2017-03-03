const ExtractTextPlugin = require('extract-text-webpack-plugin')
	path = require('path');
module.exports = {
	entry: {
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
		// {
		// 	test: /\.(png|jpe?g)$/,
		// 	use: {
		// 		loader: 'url-loader',
		// 		options: {
		// 			limit: 1500,
		// 			name: 'assets/[name].[hash].[ext]',
		// 	}
		// 	},
		// },
		{
			test: /\.(png|jpe?g)$/,
			use:{
				loader: 'file-loader',
				options: {
					name: 'assets/[name].[hash].[ext]',
			}
			},
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

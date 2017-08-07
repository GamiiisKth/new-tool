const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

module.exports = {
	// the entry file for the bundle
	entry: {
		path: path.resolve(__dirname, './client/src/app.js')
	},

	// the bundle file we will get in the result
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},

	module: {
		// apply loaders to files that meet given conditions
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, './client/src'),
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [ 'es2015', 'stage-0' ],
					plugins: [ 'transform-decorators-legacy', 'transform-class-properties' ]
				}
			},
			// css
			{
				test: /\.scss$/,
				loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				test: /\.css$/,
				loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				exclude: /node_modules/,
				loader: 'file-loader'
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'FontMin-loader',
				query: {
					limit: 10240,
					ext: 'woff',
					name: 'fonts/[name]',
					text: 'helloworld'
				}
			},
			{
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/octet-stream'
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file'
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=image/svg+xml'
			},
			// static assets
			{ test: /\.html$/, use: 'html-loader' },
			{
				test: /\.json$/,
				loaders: [ 'json-loader' ]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './public/index.html' }),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	]
};

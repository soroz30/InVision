const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
	mode: 'development',
	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",	
	},
	resolve: {
		alias: {
			Data: path.resolve(__dirname, 'src/Data/'),
		},
		extensions: ['.js', '.less']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_moduels/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env', 'react'],
							plugins: ['transform-es2015-arrow-functions']
						}
					}
				],
			}, {
					test: /\.less$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
							  plugins: () => autoprefixer({
							    browsers: ['last 3 versions', '> 1%']
							  })
							}
						},
					    'less-loader'
					]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	devtool: 'source-map',
    devServer: {
        contentBase: __dirname + "/dist",
    	inline: true,
        hot: true,
        port: 9000
    },
    plugins: [
	    new CleanWebpackPlugin(['dist']),
    	new HtmlWebPackPlugin({
    		template: './src/index.html'
    	}),
        new MiniCssExtractPlugin({
      		filename: "[name].css",
    	})
    ]
}
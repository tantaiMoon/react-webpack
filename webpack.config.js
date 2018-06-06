var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// devtools: 'eval-source-map',
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js'
	},
	module: {
		rules: [
			{
				test: /\.json$/,
				loader: "json-loader"
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules!postcss-loader'
			},
      //配置file-loader，加载图片，字体资源
			{
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				loader: 'url-loader?limit=50000&name=[path][name].[ext]'
			}
    ]
	},
	plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.LoaderOptionsPlugin({
    	options: {
    		postcss: [
   				require('autoprefixer')//调用autoprefixer插件
 				]
    	}
    })
  ],
  
	devServer: {
		port: 3000
	}
}
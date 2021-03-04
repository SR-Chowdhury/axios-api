# Webpack Boiler Plate

**Getting Started:** 
_Webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included._

# Basic Setup

* Let’s create a directory example: webpack-bp
* Create a ‘src’ folder. Within ‘src’ folder
  * create a ‘scripts’ folder. Within ‘scripts’ folder
    * create a ‘index.js’ file
  * create a ‘styles’ folder. Within ‘styles’ folder
    * create a ‘index.css’ file
  * create index.html file
* from this (webpack-bp) directory run: 
		
		npm init -y
* Create ‘webpack.config.js’ file
* run: 
 		
		npm i -D webpack webpack-cli
	
**webpack.config.js =>** 
      
	const path = require('path');

	module.exports = {

		mode: 'development',
		entry: './src/scripts/index.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js',
		},

	};

**package.json =>**

      "scripts": {
		"build": "webpack",
	},

**index.html =>**
      
      <!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Webpack Boiler Plate</title>
	</head>
	<body>
		<h1>Bismillahir Rahmanir Rahim</h1>

	<script src="/dist/bundle.js"></script>
	</body>
	</html>

**index.js**
      
	const fun = () => console.log('Allahuakbar');
	fun();

**----You are now ready to show output [npm run build]---**

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
# Now time is coming for using babel-loader for converting ES6 to ES5

**install babel-loader:**
	
	npm install i -D babel-loader @babel/core @babel/preset-env webpack
	
**install babel-plugin**

	npm install i -D@babel/plugin-proposal-class-properties


**Update ‘webpack.config.js’ =>**

	module: {
		rules: 
		[
			// Babel Loader with plugins
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-class-properties']
					}
				}
			},
		]
	},
	

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# Now we are using CSS loader with MiniCssExtractPlugin

**run:**

	npm install --save-dev css-loader mini-css-extract-plugin
	
**Update index.html =>**

	<link rel="stylesheet" href="/dist/main.css">

**Update webpack.config.js =>**

	const MiniCssExtractPlugin = require('mini-css-extract-plugin');

**Inside module.exports  add =>**

	// CSS Loader
	{
		test: /\.css$/,
		use: [
			MiniCssExtractPlugin.loader, // instead of "style-loader",
	'		css-loader'
		],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	]

**Update index.js =>**

	import '../styles/index.css';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# If you want to use SASS instead of CSS than here we go….

_To begin you’ll need to install sass-loader_

	npm i -D sass-loader sass

**Then update the webpack.config.js =>**

	// CSS Loader + sass loader
	{
		test: /\.scss$/,
		use: [
			MiniCssExtractPlugin.loader, // instead of "style-loader",
			'css-loader',
			'sass-loader'
		],
	},

**Rename index.css file  as**
	
	index.scss 

**Update index.js =>**

	import '../styles/index.scss';
	

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# Now we are using HTML loader with MiniCssExtractPlugin

_To begin you’ll need to install html-loader & HtmlWebPackPlugin _

	npm i -D html-loader  html-webpack-plugin
	
**Update webpack.config.js =>**

_add top of the file_

	const HtmlWebpackPlugin = require('html-webpack-plugin');

_add loader_

	// HTML loader 
	{
		test: /\.html$/i,
		use: 'html-loader',
	}

_add plugins_

	new HtmlWebpackPlugin({
		template: './src/index.html'
	}),


**Update index.html file =>**

_delete those link file from index.html file_

	<link rel="stylesheet" href="/dist/main.css">

	<script src="/dist/bundle.js"></script>


**Finally run index.html from dist folder. Done!!!**

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

**Finally we are using webpack-dev-server**

_First thing first, install the module:_

	npm i -D webpack-dev-server

**Update webpack.config.js =>**

	devServer: {
		compress: true,
		open: true,
		port: 2222, // it can be anything like 3300
	},

**Update package.json =>**

	"scripts": {
		"start": "webpack serve",
		"build": "webpack"
	},

**Finally run**

	npm start

# Here we go…… start your live server. Thanks

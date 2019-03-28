let path = require('path');
console.log('__dirname ==>', __dirname)
module.exports = {
	entry: {
		app: './app/app.js'
	},
	output: {
		path: path.resolve(__dirname, '../public'),
		filename: '[name].js'
	}
}
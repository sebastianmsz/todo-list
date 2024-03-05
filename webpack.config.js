const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
        clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template.html',
			favicon: './src/img/favicon.svg',
		}),
	],
	module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
                        loader: 'file-loader',
                        options: {
                          publicPath: 'img',
                        },
					},
				],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

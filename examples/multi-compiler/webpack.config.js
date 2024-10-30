const path = require("path");
const webpack = require("../../");

module.exports = [
	{
		name: "mobile",
		// mode: "development" || "production",
		entry: "./example",
		output: {
			path: path.join(__dirname, "dist"),
			filename: "mobile.js"
		},
		plugins: [
			new webpack.EnvironmentPlugin({
				ENV: "mobile"
			})
		]
	},

	{
		name: "desktop",
		// mode: "development" || "production",
		entry: "./example",
		output: {
			path: path.join(__dirname, "dist"),
			filename: "desktop.js"
		},
		plugins: [
			new webpack.EnvironmentPlugin({
				ENV: "desktop"
			})
		]
	}
];

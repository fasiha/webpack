if (process.env.TESTING && process.env.ENV === "mobile") {
	require("./mobile-stuff");
}
console.log("Running " + process.env.ENV + " build");
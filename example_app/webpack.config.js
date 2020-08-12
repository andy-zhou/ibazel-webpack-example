const path = require("path");

module.exports = (env, argv) => ({
  mode: argv.mode,
  entry: path.resolve(__dirname, "./index.js"),
  output: {
    filename: "app.bundle.js",
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000
  },
});

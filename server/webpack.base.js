module.exports = {
  // Tell webpack to run Babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/, // ensures that we only run babel on js files
        loader: "babel-loader",
        exclude: /node_modules/, // not run babel over certain directories
        options: {
          presets: [
            "react",
            "stage-0", // for async code
            ["env", { targets: { browsers: ["last 2 version"] } }] // last 2 versions of all popular browsers
          ]
        }
      }
    ]
  }
};

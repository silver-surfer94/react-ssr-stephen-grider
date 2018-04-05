// Used to run Webpack and Babel on the server side code
// Allows us to write jsx on server
const path = require('path');

module.exports = {
  // Inform webpack that we're building a bundle
  // for node.JS, rather than the browser
  target: 'node',

  // Tell webpack the root file of our
  // server application
  entry: './src/index.js',

  // Tell webpack where to put the
  // output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // Tell webpack to run Babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/, // ensures that we only run babel on js files
        loader: 'babel-loader',
        exclude: /node_modules/, // not run babel over certain directories
        options: {
          presets: [
            'react',
            'stage-0', // for async code
            ['env', { targets: { browsers: ['last 2 version'] } }] // last 2 versions of all popular browsers
          ]
        }
      }
    ]
  }
};

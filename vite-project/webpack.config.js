// webpack.config.js

const path = require('path');

module.exports = {
  // ...other webpack configurations
  module: {
    rules: [
      // ...other rules
      {
        test: /\.scss$/,
        use: [
          'style-loader',  // Injects CSS into the DOM.
          'css-loader',    // Translates CSS into CommonJS.
          'sass-loader',   // Compiles SCSS to CSS.
        ],
      },
    ],
  },
};

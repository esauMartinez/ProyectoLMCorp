const path = require('path');

module.exports = {
  mode: 'development',
  entry: './public/javascripts/unidades/index.js',
  output: {
    path: path.resolve(__dirname, './public/javascripts/unidades'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000
  }
};

// module.exports = {
//   mode: 'development',
//   entry: './public/javascripts/personal/index.js',
//   output: {
//     path: path.resolve(__dirname, './public/javascripts/personal'),
//     filename: 'bundle.js'
//   },
//   devServer: {
//     port: 3000
//   }
// };

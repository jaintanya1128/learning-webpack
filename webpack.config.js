const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        //use: ['file-loader'], //it can used like this if no options need to be passed or like below
        loader: 'file-loader',
        options: {
          //BY Default the filename of the resulting file is the hash of the file's contents with the original extension
          name: '[path][name].[ext]' //to generate the file into the output directory retaining the full directory structure.
          //[path] can be omitted if, only same name image is needed in the output directory
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader', options: { injectType: 'styleTag' } }, // The `injectType`  option can be avoided because it is default behaviour. Other values for options are singletonStyleTag, lazyStyleTag, lazySingletonStyleTag, linkTag
          { loader: 'css-loader', options: { sourceMap: true } }
        ]
      }
    ]
  }
};

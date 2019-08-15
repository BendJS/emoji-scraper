const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const srcPath = 'src/'
const removeSrcDirectory = path => path.substring(srcPath.length);

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  devtool: 'inline-source-map',
  optimization: {
    minimize: !isDev
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: "src/manifest.json",
        transform: function (content, _path) {
          // generates the manifest file using the package.json information
          return Buffer.from(JSON.stringify({
            description: process.env.npm_package_description,
            version: process.env.npm_package_version,
            ...JSON.parse(content.toString())
          }));
        }
      },
      {
        from: 'src/images/**/*',
        transformPath: removeSrcDirectory
      }
    ])
  ]
};

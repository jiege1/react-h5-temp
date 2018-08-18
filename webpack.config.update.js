const ExtractTextPlugin = require('extract-text-webpack-plugin');
const IS_DEV = process.env.NODE_ENV !== 'production';
const rootSrc = __dirname + '/src';

module.exports = (config) => {

  config = {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        components: rootSrc + '/components'
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader'],
          }),
        },
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  localIdentName: '[local][hash:base64:6]',
                  modules: true,
                  camelCase: true,
                  sourceMap: IS_DEV
                }
              },
              {
                loader: 'px2rem-loader',
                options: {
                  remUnit: 75,
                  remPrecision: 8,
                }
              },
              {
                loader: 'less-loader'
              }
            ],
            fallback: 'style-loader'
          })
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            // CSS图片目录
            name: IS_DEV ? '[path][name].[ext]' : 'assets/[name].[ext]',
          }
        },
      ]
    }
  };

  return config;
};
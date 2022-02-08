const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

// eslint-disable-next-line no-console
console.log('Production mode is: ', isProduction);

module.exports = {
  'watch': !isProduction,
  'mode': isProduction ? 'production' : 'development',
  'devtool': isProduction ? false : 'inline-source-map',
  'entry': {
    'scripts/content': './src/app/content.ts',
    'scripts/background': './src/app/background.ts',
    'scripts/popup': './src/app/popup.ts',
    'scripts/inject': './src/app/inject.ts',
  },
  'output': {
    'publicPath': '',
  },
  'resolve': {
    extensions: ['.ts', '.js'],
  },
  'node': false,
  'plugins': [
    new CopyPlugin({
      'patterns': [
        {
          'from': './src/manifest.json',
          'to': 'manifest.json',
        },
        {
          'from': './src/assets',
          'to': 'assets',
        },
        {
          'from': './src/styles',
          'to': 'styles',
        },
        {
          'from': './src/pages',
          'to': 'pages',
        },
      ],
    }),
  ],
  'module': {
    'rules': [
      {
        'test': /\.js$/,
        'exclude': /node_modules/,
        'use': 'babel-loader',
      },
      {
        'test': /\.ts$/,
        'exclude': /node_modules/,
        'use': 'ts-loader',
      },
    ],
  },
  'optimization': {
    'minimize': true,
    'minimizer': [
      new TerserPlugin(),
      new HtmlMinimizerPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
};

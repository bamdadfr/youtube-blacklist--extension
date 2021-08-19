const CopyPlugin = require ('copy-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'

// eslint-disable-next-line no-console
console.log ('Production mode is: ', isProduction)

module.exports = {
    'watch': !isProduction,
    'mode': isProduction ? 'production' : 'development',
    'devtool': isProduction ? false : 'cheap-source-map',
    'entry': {
        'scripts/content': './src/scripts/content.js',
        'scripts/background': './src/scripts/background.js',
        'scripts/popup': './src/scripts/popup.js',
        'inject/all': './src/inject/all.js',
        'inject/watch': './src/inject/watch.js',
        'inject/home': './src/inject/home.js',
        'inject/results': './src/inject/results.js',
    },
    'output': {
        'publicPath': '',
    },
    'node': false,
    'plugins': [
        new CopyPlugin ({
            'patterns': [
                {
                    'from': './src/manifest.json',
                    'to': 'manifest.json',
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
                'use': {
                    'loader': 'babel-loader',
                },
            },
        ],
    },
}
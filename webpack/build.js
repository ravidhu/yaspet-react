const path                 = require('path')
const miniCssExtractPlugin = require("mini-css-extract-plugin")

const typescriptRules = require('./rules/typescript')
const styleSheetRules = require('./rules/styleSheet')
const fileLoaderRules = require('./rules/fileLoader')

module.exports = {

    target: 'electron-renderer',

    entry: './app/src/front/index.tsx',

    output: {
        path: path.resolve('./app/build/front'),
        publicPath: 'build/front/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            typescriptRules,
            styleSheetRules,
            fileLoaderRules
        ]
    },

    plugins: [
        new miniCssExtractPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        })
    ],

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    mode : 'production'

}

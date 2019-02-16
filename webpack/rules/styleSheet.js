const miniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    test: /(\.css$|\.scss$)/,
    use: [
        miniCssExtractPlugin.loader,
        'css-loader',
        'resolve-url-loader',
        'sass-loader?sourceMap'
    ]
}
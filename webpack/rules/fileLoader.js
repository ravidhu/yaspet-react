module.exports = {
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'file-loader',
    query: {
        name: '[name].[ext]?[hash]'
    }
}
module.exports = {

    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: [
        {
            loader: 'awesome-typescript-loader'
        }
    ]

}
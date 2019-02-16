const merge = require('webpack-merge')

const buildConfig = require('./build')

module.exports = merge(buildConfig, {
    watch: true,
    mode : 'development',
})

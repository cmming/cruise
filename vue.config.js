'use strict'
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const path = require('path')
    // const defaultSettings = require('./src/settings.js')
    // const name = defaultSettings.title || 'vue Element Admin' // page title

function resolve(dir) {
    return path.join(__dirname, dir)
}


module.exports = {

    outputDir: 'dist',
    productionSourceMap: false,

    devServer: {
        proxy: {
            '/mock': {
                ws: false,
                target: 'http://localhost:9777/',
                changeOrigin: true,
                pathRewrite: { '^/mock': '', }
            },
        }
    },
    configureWebpack: {

        plugins: [
            new CompressionWebpackPlugin({
                threshold: 10240,
                minRatio: 0.8
            })
        ],
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        // name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    // 选项...
    publicPath: process.env.NODE_ENV === 'production' ?
        './' : '/',
    chainWebpack(config) {
        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}
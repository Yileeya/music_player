//vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '/token': {
                target: 'https://account.kkbox.com/oauth2/token',
                ws: true,
                changeOrigin: true,
            },
        },
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/music_player/'
        : '/'
}
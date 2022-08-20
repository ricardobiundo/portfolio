const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Ricardo Marques',
    },
  }
})

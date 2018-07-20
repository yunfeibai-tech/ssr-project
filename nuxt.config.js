module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ssr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'red' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vender:[
      'element-ui',
      'axios'
    ],
  },
  babel:{
    "plugins": [["component", [
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-default"
      },
      'transform-async-to-generator',
      'transform-runtime'
    ]]],
    comments: true
  },
  loaders:[
    {
      test: /\.less/,
      loader: 'vue-style-loader!less-loader'
    },
  ],
  plugins: [
    '~plugins/element-ui'
  ],
  css: [
    // 全部引用的时候需要用到
    'element-ui/lib/theme-chalk/index.css','~/assets/main.css'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:3000',
      changeOrigin: true,  //是否跨域
      "secure": false,
      pathRewrite: { '^/api/': '' }
    }
  }
}

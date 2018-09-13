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
  loading: { color: '#0a8481' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vender:[
      'element-ui',
      'axios',
      'd3'
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
    {
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: 'url-loader',
      query: {
        limit: 1000, // 1KB
        name: 'img/[name].[hash:7].[ext]'
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 1000, // 1 KB
        name: 'fonts/[name].[hash:7].[ext]'
      }
    }
  ],
  plugins: [
    '~plugins/element-ui',
    '~plugins/filters',
    '~plugins/d3'
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
      pathRewrite: { '^/api/': '/' }
    }
  }
};

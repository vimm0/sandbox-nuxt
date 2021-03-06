import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      // {src: 'aos.js'}, // import js in head rather than body no other way around for global import
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  router: {
    middleware: 'i18n'
  },
  /*
  ** Global CSS
  */
  css: [
    // global css import
    '~/assets/css/index.css',
    '~/assets/css/default.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '~/plugins/lib',
    '~/plugins/i18n.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}

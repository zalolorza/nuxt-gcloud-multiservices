const merge = require('deepmerge')
const root = (process.env.ENV === 'dev' || process.env.ENV === 'build') ? '../..' : '.'
const globalConfig = require(`${root}/nuxt.global`).default

const base = '/service1'

export default merge(globalConfig, {
  srcDir: __dirname,
  buildDir: process.env.ENV === 'dev' ? '.nuxt/service1' : '.nuxt',
  router: {
    base
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
})

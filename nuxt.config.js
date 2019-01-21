const pkg = require('./package');
const fs = require('fs');

const locales = [
  {code: 'en', iso: 'en-US', file: 'en-US.js'},
  {code: 'ru', iso: 'ru-RU', file: 'ru-RU.js'},
];


const contents = fs.readFileSync('./projects/index.js', 'utf8');
const grep = contents.match(/slug: ['"](.*)['"]/ig);
const slugs = grep.map(entry => entry.split(/['"]/)[1])
const routes = locales.flatMap(locale => {
  return slugs.map(slug => `/${locale.code}/projects/${slug}`)
})

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#53ABB3'},

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/reset.css',
    '~/assets/scss/main.scss',
    '~/assets/fonts/vladivostok/vladivostok.css',
    '~/assets/fonts/montserrat/montserrat.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-i18n', {
      locales: locales,
      baseUrl: 'https://katerlebedeva.com',
      defaultLocale: 'en',
      detectBrowserLanguage: false,
      strategy: 'prefix',
      lazy: true,
      langDir: 'lang/'
    }],
    '~/modules/rewrite',
    '@nuxtjs/sitemap',
    ['@nuxtjs/pwa', {
      meta: {
        ogHost: 'https://katerlebedeva.com',
        ogSiteName: 'katerlebedeva.com'
      }
    }]
  ],

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://katerlebedeva.com',
    cacheTime: 1000 * 60 * 15,
    generate: true,
    routes: () => routes.map(route => {
      return {
        url: route,
        changefreq: 'monthly',
        priority: 1,
        lastmodISO: new Date().toISOString(),
      }
    })
  },

  generate: {
    fallback: "404.html",
    subFolders: false,
    routes: routes
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

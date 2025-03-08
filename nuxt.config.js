import i18n from "./i18n.js"

export default {
  telemetry: false,
  target: "static",
  ssr: true,
  /*
   ** Headers of the page
   */
  head: {
    title: "Bitcart - Non-Custodial Crypto Payments Processor",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    ],
  },
  gtm: {
    pageTracking: true,
  },
  publicRuntimeConfig: {
    domain: process.env.BITCART_DOMAIN || "http://localhost:3000",
    store: process.env.BITCART_STORE || "1",
    matomoURL: process.env.MATOMO_URL || "",
    matomoScriptURL: process.env.MATOMO_SCRIPT_URL || "",
    matomoActions: process.env.MATOMO_ACTIONS || "",
    matomoID: parseInt(process.env.MATOMO_ID || "1"),
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID,
    },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/main.sass"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/mq.js", { src: "~/plugins/vue-matomo.js", ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    "@nuxtjs/vuetify",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/i18n",
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/sitemap",
    "@nuxtjs/gtm",
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  pwa: {
    meta: {
      theme_color: "#4CAF50",
      name: "Bitcart",
      ogHost: "https://bitcart.ai",
      twitterCard: "summary",
      twitterSite: "@BitcartCC",
      twitterCreator: "@BitcartCC",
    },
  },
  vuetify: {
    defaultAssets: false,
    optionsPath: "./vuetify.options.js",
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    // https://github.com/nuxt-community/vuetify-module/issues/232
    splitChunks: {
      pages: false,
    },
    babel: {
      presets({ isClient }, preset) {
        if (isClient) {
          preset[1].targets = { browsers: "> 0.25%, not dead" }
        }
        return [preset]
      },
    },
  },
  i18n: {
    ...i18n,
    baseUrl: ({ $config }) => {
      return $config.domain
    },
  },
  sitemap: {
    hostname: "https://bitcart.ai",
    routes: ["/supporters.json"],
  },
  generate: {
    fallback: "404.html",
    subFolders: false,
  },
}

import Vue from "vue"
import VueMatomo from "vue-matomo"

export default ({ app, $config }) => {
  if ($config.matomoURL) {
    Vue.use(VueMatomo, {
      router: app.router,
      siteId: $config.matomoID,
      host: $config.matomoURL,
    })
  }
}

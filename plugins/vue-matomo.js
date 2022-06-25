import Vue from "vue"
import VueMatomo from "vue-matomo"

export default ({ app, $config }) => {
  if ($config.matomoURL) {
    Vue.use(VueMatomo, {
      router: app.router,
      siteId: $config.matomoID,
      trackerUrl: $config.matomoURL,
      trackerScriptUrl: $config.matomoScriptURL,
      enableHeartBeatTimer: true,
      preInitActions: $config.matomoActions.split(";").map((x) => [x]),
    })
  }
}

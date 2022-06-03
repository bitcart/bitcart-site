import Vue from "vue"
import VueMq from "vue-mq"

Vue.use(VueMq, {
  breakpoints: {
    mobile: 960,
    desktop: Infinity,
  },
  defaultBreakpoint: "desktop",
})

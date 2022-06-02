<template>
  <v-app dark>
    <v-navigation-drawer
      v-if="isMounted && !$vuetify.breakpoint.smAndUp"
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in toolbarItems"
          :key="i"
          :to="item.external ? '' : localePath(item.to)"
          :href="item.external ? item.to : ''"
          :target="item.external ? '_blank' : ''"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.text" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left fixed app>
      <v-app-bar-nav-icon
        v-if="isMounted && !$vuetify.breakpoint.smAndUp"
        @click.stop="drawer = !drawer"
      />
      <v-img
        max-height="60"
        max-width="60"
        contain
        src="/icon.svg"
        :style="logoStyle"
        class="mr-2"
        @click="goHome"
      />
      <v-toolbar-title @click="goHome" v-text="title" />
      <v-spacer />
      <v-toolbar-items v-if="isMounted && $vuetify.breakpoint.smAndUp">
        <v-btn
          v-for="item in toolbarItems"
          :key="item.text"
          :to="item.external ? '' : localePath(item.to)"
          :href="item.external ? item.to : ''"
          :target="item.external ? '_blank' : ''"
          text
        >
          {{ item.text }}
        </v-btn>
      </v-toolbar-items>
      <language-menu />
      <v-icon @click.stop="changeTheme"> mdi-moon-waning-crescent </v-icon>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer fixed app class="justify-center">
      <span>&copy; BitcartCC 2018-{{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import LanguageMenu from "@/components/LanguageMenu.vue"
export default {
  components: {
    LanguageMenu,
  },
  data() {
    return {
      isMounted: false,
      drawer: false,
      title: "BitcartCC",
    }
  },
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
  computed: {
    logoStyle() {
      return this.$vuetify.theme.dark ? "filter: invert(1)" : ""
    },
    toolbarItems() {
      return [
        {
          text: this.$t("features"),
          to: "/#features",
        },
        {
          text: this.$t("docs"),
          to: "https://docs.bitcartcc.com",
          external: true,
        },
        {
          text: this.$t("blog"),
          to: "https://blog.bitcartcc.com",
          external: true,
        },
        {
          text: this.$t("github"),
          to: "https://github.com/bitcartcc/bitcart",
          external: true,
        },
        {
          text: this.$t("community"),
          to: "/#community",
        },
        {
          text: this.$t("easy-launch"),
          to: "https://configurator.bitcartcc.com",
          external: true,
        },
        {
          text: this.$t("roadmap"),
          to: "https://github.com/orgs/bitcartcc/projects/1",
          external: true,
        },
      ]
    },
  },
  created() {
    if (process.client) {
      const hours = new Date().getHours()
      const isDayTime = hours > 6 && hours < 20
      if (!isDayTime) {
        this.$vuetify.theme.dark = true
      }
    }
  },
  mounted() {
    this.isMounted = true
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    goHome() {
      this.$router.push(this.localePath("/"))
    },
  },
}
</script>

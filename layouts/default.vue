<template>
  <v-app dark>
    <v-navigation-drawer
      v-if="$mq === 'mobile'"
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
        v-if="$mq === 'mobile'"
        :aria-label="$t('menu')"
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
      <v-toolbar-items v-if="$mq === 'desktop'">
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
      <v-icon :aria-label="$t('color-mode')" @click.stop="changeTheme">
        $mdiMoonWaningCrescent
      </v-icon>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer fixed app class="justify-center">
      <span>&copy; Bitcart 2018-{{ new Date().getFullYear() }}</span>
    </v-footer>
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Bitcart",
        "url": "https://bitcart.ai",
        "sameAs": [
          "https://twitter.com/BitcartCC",
          "https://github.com/bitcart",
          "https://reddit.com/r/Bitcart",
          "https://linkedin.com/company/bitcartcc",
          "https://instagram.com/bitcartcc"
        ]
      }
    </script>
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
      drawer: false,
      title: "Bitcart",
    }
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: i18nHead.htmlAttrs,
      meta: [
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.$config.domain + this.$icon(512),
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "BitcartCC",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: process.env.npm_package_description,
        },
        ...i18nHead.meta,
      ],
      link: [
        {
          rel: "preload",
          as: "style",
          href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap",
          media: "print",
          onload: "this.media='all'",
        },
        ...i18nHead.link,
      ],
    }
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
          to: "https://docs.bitcart.ai",
          external: true,
        },
        {
          text: this.$t("blog"),
          to: "https://blog.bitcart.ai",
          external: true,
        },
        {
          text: this.$t("github"),
          to: "https://github.com/bitcart/bitcart",
          external: true,
        },
        {
          text: this.$t("community"),
          to: "/#community",
        },
        {
          text: this.$t("easy-launch"),
          to: "https://configurator.bitcart.ai",
          external: true,
        },
        {
          text: this.$t("roadmap"),
          to: "https://github.com/orgs/bitcart/projects/1",
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

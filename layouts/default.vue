<template>
  <v-app dark>
    <v-navigation-drawer
      v-if="!$vuetify.breakpoint.smAndUp"
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in toolbarItems"
          :key="i"
          :to="item.external ? '' : item.to"
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
        v-if="!$vuetify.breakpoint.smAndUp"
        @click.stop="drawer = !drawer"
      />
      <v-img max-height="60" max-width="60" contain src="/icon.png" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-items v-if="$vuetify.breakpoint.smAndUp">
        <v-btn
          v-for="item in toolbarItems"
          :key="item.text"
          :to="item.external ? '' : item.to"
          :href="item.external ? item.to : ''"
          :target="item.external ? '_blank' : ''"
          text
        >
          {{ item.text }}
        </v-btn>
        <v-icon @click.stop="changeTheme"> mdi-moon-waning-crescent </v-icon>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer fixed app>
      <span>&copy; BitcartCC 2018-2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      toolbarItems: [
        {
          text: "Features",
          to: "/#features",
        },
        {
          text: "Docs",
          to: "https://docs.bitcartcc.com",
          external: true,
        },
        {
          text: "Blog",
          to: "https://blog.bitcartcc.com",
          external: true,
        },
        {
          text: "Github",
          to: "https://github.com/bitcartcc/bitcart",
          external: true,
        },
        {
          text: "Community",
          to: "/#community",
        },
        {
          text: "Easy Launch",
          to: "https://launch.bitcartcc.com",
          external: true,
        },
      ],
      title: "BitcartCC",
    }
  },
  created() {
    const hours = new Date().getHours()
    const isDayTime = hours > 6 && hours < 20
    if (!isDayTime) {
      this.$vuetify.theme.dark = true
    }
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>

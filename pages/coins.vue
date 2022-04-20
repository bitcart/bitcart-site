<template>
  <v-container>
    <v-row>
      <p>
        {{ $t("supported-coins") }}: {{ Object.values(currencies).join(", ") }}
      </p>
    </v-row>
    <v-row>
      <p>
        {{ $t("token-platform-desc") }}
      </p>
    </v-row>
    <v-row v-for="(tokens, platform) in availableTokens" :key="platform">
      {{ $t("platform") }} {{ platform.toUpperCase() }}: {{ tokens.join(", ") }}
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      currencies: {},
      tokenList: {},
    }
  },
  computed: {
    availableTokens() {
      return Object.fromEntries(
        Object.entries(this.tokenList).filter(
          ([key, value]) => value.length > 0
        )
      )
    },
  },
  beforeMount() {
    this.$axios.get("https://api.bitcartcc.com/cryptos/supported").then((r) => {
      this.currencies = r.data
      for (const currency in this.currencies) {
        this.$axios
          .get(`https://api.bitcartcc.com/cryptos/tokens/${currency}`)
          .then((r) => this.$set(this.tokenList, currency, r.data.result))
      }
    })
  },
}
</script>

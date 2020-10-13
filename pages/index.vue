<template>
  <v-container>
    <v-row>
      <v-col>
        <hgroup class="mb-5">
          <p
            :class="{
              'display-4': $vuetify.breakpoint.mdAndUp,
              'display-2': $vuetify.breakpoint.smAndDown,
            }"
            class="pb-4 font-weight-bold green--text"
          >
            BitcartCC
          </p>
          <h2>
            Start Accepting Crypto Payments With 0% Fees &amp; No Third-party
          </h2>
        </hgroup>
      </v-col>
    </v-row>
    <v-row class="mb-5">
      <v-col cols="12" md="6">
        <h2 class="green--text text--darken-2">What is BitcartCC</h2>
        <p>
          BitcartCC is a self-hosted, open-source cryptocurrency all-in-one
          solution. It's secure, private, censorship-resistant and free.
        </p>
        <p>
          Receive your bitcoin and altcoin payments without any fees or
          third-party involvement. You are your own bank. Funds go directly to
          your wallet; your private key is never required.
        </p>
        <div>
          <v-btn
            class="success"
            href="https://admin.bitcartcc.com"
            target="blank_"
          >
            Live Demo
          </v-btn>
          <v-btn @click.stop="showDonation" class="success">
            &nbsp;Donate&nbsp;
            <v-icon> mdi-chevron-right-circle </v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <h2 class="green--text text--darken-2">Join the community</h2>
        <p>
          BitcartCC is an open-source project, not a company. We rely on a
          network of diverse contributors and users to provide support for
          numerous use-cases. Join us in improving, learning, and building
          BitcartCC.
        </p>
        <div class="d-flex flex-row flex-wrap justify-space-between">
          <v-btn
            v-for="community in $options.communities"
            :key="community.name"
            :href="community.url"
            xl
            target="_blank"
            class="mb-2"
          >
            <v-icon size="30px">
              {{ community.icon }}
            </v-icon>
            {{ community.name }}
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row id="features" class="mb-5">
      <v-col cols="12" class="pb-0">
        <h2>Features</h2>
      </v-col>
      <v-col class="d-flex flex-row flex-wrap pl-0 pr-0 pt-0">
        <FeatureItem
          v-for="feature in $options.features"
          :key="feature.text"
          :item="feature"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FeatureItem from "@/components/FeatureItem.vue"
import features from "@/data/features.json"
import communities from "@/data/communities.json"
export default {
  features,
  communities,
  components: {
    FeatureItem,
  },
  data() {
    return {}
  },
  head() {
    return {
      script: [
        { src: "https://admin.bitcartcc.com/modal/bitcart.js" }, // include modal script from BitcartCC Admin instance
      ],
    }
  },
  methods: {
    showDonation() {
      // process.env is got from env section in nuxt.config.js
      this.price = 5 // 5$
      this.$axios
        .post("https://api.bitcartcc.com/invoices", {
          store_id: parseInt(process.env.store),
          price: this.price,
        })
        .then((res) => {
          window.bitcart.showInvoice(res.data.id)
        })
    },
  },
}
</script>
<style lang="scss">
h1 {
  font-size: 6rem;
}
h2 {
  margin-bottom: 8px;
}

hgroup {
  h2 {
    margin-top: -30px;
  }
}
</style>

<template>
  <v-container>
    <v-row id="features">
      <v-col>
        <h1 class="green--text text--darken-2">
          Start Accepting Crypto Payments With 0% Fees &amp; No Third-party
        </h1>
        <p>
          BitcartCC is a self-hosted, open-source cryptocurrency all-in-one solution. It's secure, private, censorship-resistant and free.
          <br>
          <span>
            <v-icon @click.stop="showDetails = !showDetails">
              mdi-information
            </v-icon>
          </span>
          <span v-if="showDetails">
            <br>Receive your bitcoin and altcoin payments without any fees or third-party involvement. You are your own bank. Funds go directly to your wallet; your private key is never required.
          </span>
        </p>
        <div>
          <v-btn class="success" href="https://admin.bitcartcc.com" target="blank_">
            LIVE DEMO
          </v-btn>
          <v-btn @click.stop="showDonation" class="success">
            &nbsp;DONATE&nbsp;
            <v-icon>
              mdi-chevron-right-circle
            </v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-carousel :dark="$vuetify.theme.dark" :light="!$vuetify.theme.dark" :hide-delimiters="true" :height="600">
        <carousel-item v-for="feature in $options.features" :key="feature.text" :item="feature" />
      </v-carousel>
    </v-row>
    <v-row id="community">
      <h1 class="green--text text--darken-2">
        JOIN THE COMMUNITY
      </h1>
    </v-row>
    <v-row>
      <p>BitcartCC is an open-source project, not a company. We rely on a network of diverse contributors and users to provide support for numerous use-cases. Join us in improving, learning, and building BitcartCC.</p>
    </v-row>
    <v-row>
      <v-col v-for="community in $options.communities" :key="community.name">
        <v-btn :href="community.url" target="_blank">
          <v-icon size="30px">
            {{ community.icon }}
          </v-icon>
          <h3>{{ community.name }}</h3>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CarouselItem from '@/components/CarouselItem.vue'
import features from '@/data/features.json'
import communities from '@/data/communities.json'
export default {
  features,
  communities,
  components: {
    CarouselItem
  },
  data () {
    return {
      showDetails: false
    }
  },
  methods: {
    showDonation () {
      // process.env is got from env section in nuxt.config.js
      this.$axios.post('https://demo.bitcartcc.com/token', { 'email': process.env.email, 'password': process.env.password }).then((resp) => {
        const token = resp.data.access_token // JWT auth
        this.$axios.defaults.headers.authorization = `Bearer ${token}`
        this.price = 5 // 5$
        this.$axios.post('https://demo.bitcartcc.com/invoices', { store_id: parseInt(process.env.store), price: this.price }).then((res) => {
          window.location = `https://admin.bitcartcc.com/i/${res.data.id}`
        })
      })
    }
  }
}
</script>

<style scoped>
.feature-icon {
  transform: translateY(-15px) !important;
}
</style>

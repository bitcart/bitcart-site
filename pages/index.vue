<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="mb-5 title-group">
          <h1
            :class="{
              'display-4': $mq === 'desktop',
              'display-2': $mq === 'mobile',
            }"
            class="pb-8 font-weight-bold green--text"
          >
            BitcartCC
          </h1>
          <h2>
            {{ $t("start-accepting-crypto") }}
          </h2>
        </div>
      </v-col>
    </v-row>
    <v-row class="mb-5">
      <v-col cols="12" md="6">
        <h2 class="green--text text--darken-2">
          {{ $t("what-is-bitcartcc") }}
        </h2>
        <p>
          {{ $t("bitcartcc-opensource-free") }}
        </p>
        <p>
          {{ $t("receive-crypto") }}
        </p>
        <p>
          {{ $t("supported-currencies") }}
        </p>
        <div>
          <v-btn
            class="success"
            href="https://admin.bitcartcc.com"
            target="blank_"
          >
            {{ $t("live-demo") }}
          </v-btn>
          <v-btn class="success" @click.stop="showDonation">
            {{ $t("donate") }}
            <v-icon> $mdiChevronRightCircle </v-icon>
          </v-btn>
          <v-btn :to="localePath('/supporters')" class="success">{{
            $t("support-as-a-company")
          }}</v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <h2 class="green--text text--darken-2">{{ $t("join-community") }}</h2>
        <p>
          {{ $t("bitcartcc-not-a-company") }}
        </p>
        <div class="d-flex flex-row flex-wrap justify-space-between">
          <v-btn
            v-for="community in communities"
            :key="community.name"
            :href="community.url"
            xl
            target="_blank"
            class="mb-2"
          >
            <v-icon v-if="community.icon" size="30px">
              {{ community.icon }}
            </v-icon>
            <component :is="community.component" v-else />
            {{ community.name }}
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row id="features" class="mb-5">
      <v-col cols="12" class="pb-0">
        <h2>{{ $t("features") }}</h2>
      </v-col>
      <v-col class="d-flex flex-row flex-wrap pl-0 pr-0 pt-0">
        <FeatureItem
          v-for="feature in features"
          :key="feature.text"
          :item="feature"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FeatureItem from "@/components/FeatureItem.vue"
import getFeatures from "@/data/features.js"
import getCommunities from "@/data/communities.js"
export default {
  components: {
    FeatureItem,
  },
  head() {
    return {
      script: [
        { src: "https://admin.bitcartcc.com/modal/bitcart.js", async: true }, // include modal script from BitcartCC Admin instance
      ],
    }
  },
  computed: {
    features() {
      return getFeatures(this.$i18n)
    },
    communities() {
      return getCommunities(this.$i18n)
    },
  },
  methods: {
    showDonation() {
      // this.$config is got from publicRuntimeConfig section in nuxt.config.js
      this.price = 5 // 5$
      this.$axios
        .post("https://api.bitcartcc.com/invoices", {
          store_id: this.$config.store,
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
h2 {
  margin-bottom: 8px;
}

.title-group {
  h2 {
    margin-top: -30px;
  }
}
</style>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-alert
          prominent
          type="info"
          :icon="false"
          class="mb-5 announcement-alert"
          elevation="2"
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
        >
          <v-row align="center">
            <v-col cols="auto" class="mr-md-3 mr-0">
              <v-icon size="36" color="success">$mdiRocketLaunchOutline</v-icon>
            </v-col>
            <v-col>
              <div class="text-h6 font-weight-bold mb-1 success--text">
                🎉 ETH Payments Plugin Released!
              </div>
              <div
                class="announcement-text"
                :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
              >
                Accept payments in
                <span class="font-weight-bold">ETH, TRX, BNB, MATIC</span> and
                stablecoins like
                <span class="font-weight-bold">USDT, USDC</span> and any other
                token without address prompt, non-custodially and saving on
                fees!
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div class="mt-2 d-flex flex-column flex-sm-row align-sm-center">
                <div class="success--text font-weight-bold mb-2 mb-sm-0">
                  Available now in your Admin Panel's Plugins page
                </div>
                <div class="d-flex flex-wrap mt-1 mt-sm-0">
                  <v-btn
                    color="success"
                    small
                    class="white--text ml-sm-4 mr-2 mb-2 mb-sm-0"
                    href="https://docs.bitcart.ai/guides/eth-payments-plugin"
                    target="_blank"
                  >
                    <v-icon left small>$mdiOpenInNew</v-icon>
                    View user guide
                  </v-btn>
                  <v-btn
                    color="success"
                    small
                    class="white--text mb-2 mb-sm-0"
                    href="https://t.me/bitcart/63625"
                    target="_blank"
                  >
                    <v-icon left small>$mdiOpenInNew</v-icon>
                    View announcement
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-alert>
        <div class="mb-5 title-group">
          <h1
            :class="{
              'display-4': $mq === 'desktop',
              'display-2': $mq === 'mobile',
            }"
            class="success--text pb-8 font-weight-bold"
          >
            Bitcart
          </h1>
          <h2>
            {{ $t("start-accepting-crypto") }}
          </h2>
        </div>
      </v-col>
    </v-row>
    <v-row class="mb-5">
      <v-col cols="12" md="6">
        <h2 class="success--text">
          {{ $t("what-is-bitcart") }}
        </h2>
        <p>
          {{ $t("bitcart-opensource-free") }}
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
            href="https://admin.bitcart.ai"
            target="blank_"
          >
            {{ $t("live-demo") }}
          </v-btn>
          <v-btn class="success" :loading="loading" @click.stop="showDonation">
            {{ $t("donate") }}
            <v-icon> $mdiChevronRightCircle </v-icon>
          </v-btn>
          <v-btn :to="localePath('/supporters')" class="success">{{
            $t("support-as-a-company")
          }}</v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <h2 class="success--text">
          {{ $t("join-community") }}
        </h2>
        <p>
          {{ $t("bitcart-not-a-company") }}
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
  data() {
    return {
      loading: false,
    }
  },
  head() {
    return {
      script: [
        { src: "https://admin.bitcart.ai/modal/bitcart.js", async: true }, // include modal script from Bitcart Admin instance
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
      this.loading = true
      this.$axios
        .post("https://api.bitcart.ai/invoices", {
          store_id: this.$config.store.toString(),
          price: this.price,
        })
        .then((res) => {
          this.loading = false
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

.announcement-alert {
  border-left: 4px solid #39833f;

  .announcement-text {
    font-size: 1.1rem;
    line-height: 1.5;
  }
}
</style>

<template>
  <v-container>
    <v-row class="text-center justify-center mt-3">
      <p class="text-h5">
        {{ $t("companies-support-perks") }}
        <br />
        {{ $t("support-bitcart-as-company") }}
        <a href="mailto:company@bitcart.ai">{{ $t("email-us") }}</a
        >.
      </p>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-row flex-wrap pl-0 pr-0 pt-0">
        <FeatureItem
          v-for="supporter in supporters"
          :key="supporter.text"
          :item="supporter"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FeatureItem from "@/components/FeatureItem.vue"
import supportersList from "@/static/supporters.json"
export default {
  components: {
    FeatureItem,
  },
  computed: {
    supporters() {
      return supportersList.map((supporter) => {
        return {
          text: supporter.name,
          image: supporter.image,
          links: [
            {
              text: this.$t("details"),
              url: supporter.website,
            },
          ],
          moreText: supporter.text,
        }
      })
    },
  },
}
</script>

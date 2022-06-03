<template>
  <div class="p-4 col-12 col-md-6 col-lg-4 col-xl-3">
    <v-card flat outlined height="100%">
      <v-card-title class="justify-center pt-4">
        <v-icon v-if="item.icon" size="75px" color="green" class="feature-icon">
          {{ item.icon }}
        </v-icon>
        <v-img
          v-else
          :src="item.image"
          max-width="150px"
          max-height="150px"
          contain
        >
        </v-img>
      </v-card-title>
      <v-card-text>
        <v-row class="text--primary" style="font-size: 16px">
          <v-col cols="12" class="text-center text-h6 feature-font">
            {{ item.text }}
          </v-col>
          <v-col v-if="item.moreText" cols="12">
            {{ item.moreText }}
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions v-if="item.links">
        <v-col class="text-center">
          <v-tooltip v-for="link in item.links" :key="link.url" bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                :href="link.internal ? '' : link.url"
                :target="link.internal ? '' : '_blank'"
                :to="link.internal ? localePath(link.url) : ''"
                v-bind="attrs"
                class="success mr-2 mb-2"
                v-on="on"
              >
                <span
                  :style="$mq === 'mobile' ? { 'max-width': '150px' } : {}"
                  class="d-inline-block text-truncate"
                >
                  {{ link.text }}
                </span>
              </v-btn>
            </template>
            <span>
              {{ link.text }}
            </span>
          </v-tooltip>
        </v-col>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showInfo: false,
    }
  },
}
</script>

<style scoped>
.feature-font {
  font-size: 1.1rem !important;
}
</style>

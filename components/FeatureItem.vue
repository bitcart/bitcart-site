<template>
  <div class="p-4 col-12 col-md-6 col-lg-4 col-xl-3">
    <v-card flat outlined height="100%">
      <v-card-title class="justify-center pt-4">
        <v-icon size="75px" color="green" class="feature-icon">
          {{ item.icon }}
        </v-icon>
      </v-card-title>
      <v-card-text>
        <v-row class="text--primary" style="font-size: 16px">
          <v-col cols="12">
            {{ item.text }}
          </v-col>
          <v-col cols="12">
            {{ item.moreText }}
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions v-if="item.links">
        <v-col class="text-center">
          <v-btn
            v-for="link in item.links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            class="success mr-2 mb-2"
          >
            {{ link.text }}
          </v-btn>
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

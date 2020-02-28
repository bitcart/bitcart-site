<template>
  <v-carousel-item>
    <v-card
      class="mx-auto"
      max-width="300"
    >
      <v-card-title class="justify-center">
        <v-icon size="30px" color="green" class="feature-icon">
          {{ item.icon }}
        </v-icon>
      </v-card-title>
      <v-card-text>
        <div class="text--primary">
          {{ item.text }}
        </div>
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-btn
          @click="showInfo = !showInfo"
          icon
        >
          <v-icon>{{ showInfo ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="showInfo">
          <v-divider />

          <v-card-text>
            {{ item.moreText }}
          </v-card-text>
          <v-card-actions v-if="item.links">
            <v-col>
              <div
                v-for="link in item.links"
                :key="link.url"
                class="my-2"
              >
                <v-btn
                  :href="link.url"
                  target="_blank"
                  class="success"
                >
                  {{ link.text }}
                </v-btn>
              </div>
            </v-col>
          </v-card-actions>
        </div>
      </v-expand-transition>
    </v-card>
  </v-carousel-item>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showInfo: false
    }
  }
}
</script>

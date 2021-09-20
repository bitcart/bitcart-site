<template>
  <v-layout column align-center justify-center>
    <div>
      <h1>
        {{ title }}
      </h1>
      <NuxtLink to="/"> {{ $t("home-page") }} </NuxtLink>
    </div>
  </v-layout>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: this.$t("not-found"),
      otherError: this.$t("error-occurred"),
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
  computed: {
    title() {
      return this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    },
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>

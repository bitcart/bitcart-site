<template>
  <v-menu
    bottom
    close-delay="100"
    content-class="rounded"
    left
    max-height="500"
    offset-y
    open-delay="60"
    open-on-hover
    transition="slide-y-transition"
  >
    <template #activator="{ attrs, on }">
      <v-btn
        :icon="$mq === 'mobile'"
        class="text--secondary px-0 px-md-2"
        text
        v-bind="attrs"
        :aria-label="$t('language')"
        v-on="on"
      >
        <v-icon>$mdiTranslate</v-icon>
        <v-icon class="hidden-sm-and-down" size="14"> $mdiChevronDown </v-icon>
      </v-btn>
    </template>

    <v-sheet class="overflow-hidden" rounded>
      <v-list dense expand nav>
        <template v-for="item in items">
          <v-list-item
            :key="item.code"
            class="v-list-item--default"
            :to="switchLocalePath(item.code)"
            replace
            exact
          >
            <v-list-item-title v-text="item.name" />
          </v-list-item>
        </template>
      </v-list>
    </v-sheet>
  </v-menu>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$i18n.locales
    },
  },
}
</script>

<style lang="sass">
.v-list-item.v-list-item.v-list-item--default
  min-height: 32px
  > .v-list-item__icon
    margin-bottom: 6px
    margin-top: 6px
</style>

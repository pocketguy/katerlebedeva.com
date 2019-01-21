<template>
  <div>
    <div
      :style="{gridTemplateColumns: `repeat(${grid.width || 3}, 1fr)`}"
      class="grid"
    >
      <div
        v-for="block of grid.blocks"
        :key="block.slug"
        class="grid-item"
      >
        <MyImage
          fillParent
          :src="block.project.cover || ''"
          :title="block.project.title"
          :to="localePath({name: 'projects-slug', params: {slug: block.slug}})"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import MyImage from '~/components/MyImage';

  export default {
    components: {
      MyImage
    },
    data() {
      return {
        grid: this.$store.getters['projects/grid'](this.$i18n.locale)
      }
    },
    head() {
      return {
        title: `${this.$t('portfolio')} | ${this.$t('katya lebedeva')}`,
        meta: [
          {hid: 'description', name: 'description', content: this.$t('website description')},
          {hid: 'og:title', name: 'og:title', content: this.$t('katya lebedeva') + ': ' + this.$t('portfolio')},
          {hid: 'og:description', name: 'og:description', content: this.$t('website description')},
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~assets/scss/imports.scss';

  .subheader {
    margin-top: 0;
  }

  .grid {
    display: block;
    grid-gap: 1rem;

    .grid-item:not(:last-of-type) {
      margin-bottom: 1rem;
    }

    @include for-size($tablet-landscape-up) {
      display: grid;
      grid-gap: 1rem;
      .grid-item:not(:last-of-type) {
        margin-bottom: 0;
      }
    }
  }
</style>

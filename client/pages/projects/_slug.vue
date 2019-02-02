<template>
  <div>
    <h1
      class="header"
    >
      {{ project.title }}
    </h1>
    <p
      v-if="project.description"
      class="description"
    >
      {{ project.description }}
    </p>
    <div
      :style="{gridTemplateColumns: `repeat(${project.grid.width || 1}, 1fr)`}"
      class="grid"
    >
      <div
        v-for="gridItem of project.grid.blocks"
        :key="gridItem.img"
        :style="getGridItemStyle(gridItem)"
        class="grid-item"
      >
        <MyImage
          fill-parent
          :src="gridItem.img"
          target="_blank"
          :alt="gridItem.alt || $t('image of') + ' ' + project.title.toLowerCase()"
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
    validate({ params, store }) {
      return store.state.projects.rawGrid.blocks.find(
        block => block.slug === params.slug
      );
    },
    data() {
      const locale = this.$i18n.locale;
      const slug = this.$route.params.slug;
      return {
        project: this.$store.getters['projects/get'](locale, slug)
      }
    },
    methods: {
      getGridItemStyle(item) {
        return {
          gridColumn: `span ${item.width || 1}`,
          gridRow: `span ${item.height || 1}`
        }
      }
    },
    head() {
      return {
        title: `${this.project.title} | ${this.$t('katya lebedeva')}`,
        meta: [
          {hid: 'description', name: 'description', content: this.project.description},
          {hid: 'og:title', name: 'og:title', content: this.project.title},
          {hid: 'og:description', name: 'og:description', content: this.project.description},
          {hid: 'og:image', name: 'og:image', content: `https://katerlebedeva.com${this.project.cover}`}
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~/assets/scss/_imports.scss";
  .grid {
    display: block;
    grid-gap: 1rem;
    margin-top: 4rem;

    .grid-item:not(:last-of-type) {
      margin-bottom: 1rem;
    }

    @include for-size($tablet-landscape-up) {
      display: grid;
      .grid-item:not(:last-of-type) {
        margin-bottom: 0;
      }
    }
  }

  .header {
    @include for-size($tablet-portrait-up) {
      white-space: pre-line;
    }
    font-weight: 700
  }
  .description {
    word-wrap: break-word;
    word-break: break-word;
    @include for-size($tablet-portrait-up) {
      white-space: pre-line;
    }
  }
</style>

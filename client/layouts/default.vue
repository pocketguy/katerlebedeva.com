<template>
  <div :class="{page: true, 'show-overlay': showOverlay}">
    <div class="main-wrap">
      <TheHeading @toggleOverlay="bodyHidden = !bodyHidden" />
      <Nuxt />
      <TheFooter />
    </div>
    <div class="overlay-wrap">
      <TheOverlay />
    </div>
  </div>
</template>

<script>
  import TheHeading from '~/components/TheHeading.vue'
  import TheFooter from '~/components/TheFooter.vue'
  import TheOverlay from '~/components/TheOverlay.vue'

  export default {
    components: {
      TheHeading,
      TheFooter,
      TheOverlay
    },
    computed: {
      showOverlay() {
        return this.$store.state.layout.showOverlay;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~/assets/scss/_imports.scss";
  .page {
    // overflow-x: hidden;
    // overflow-y: auto;
    position: relative;
    left: 0%;
    transition: left .3s;
    .main-wrap {
      min-width: 100%;
    }
    .overlay-wrap {
      min-width: 100%;
      height: 100vh;
      position: fixed;
      top: 0px;
      left: 100%;
      transition: left .3s;
    }
    &.show-overlay {
      left: -100%;
      .overlay-wrap {
        left: 0;
      }
    }
  }
  .main-wrap {
    margin: auto;
    min-height: 100vh;
    @include for-size($desktop-up) {
      max-width: $upper-boundary-desktop;
    }
    display: grid;
    grid-gap: 3rem;
    grid-template:
      "a"
      "b" 1fr
      "c";
    padding: 1rem;
  }
</style>

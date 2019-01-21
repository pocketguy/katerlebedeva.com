<template>
  <div class="page">
    <TheHeading />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
  import TheHeading from '~/components/TheHeading'
  import TheFooter from '~/components/TheFooter'

  export default {
    components: {
      TheHeading,
      TheFooter
    }
  }
</script>

<style scoped lang="scss">
  @import "~assets/scss/imports.scss";
  .page {
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
    // @include for-size($tablet-portrait-up) {
    //   max-width: $upper-boundary-phone;
    // }
    // @include for-size($tablet-landscape-up) {
    //   max-width: $upper-boundary-tablet-portrait;
    // }
    // @include for-size($desktop-up) {
    //   max-width: $upper-boundary-tablet-landscape;
    // }
    // @include for-size($big-desktop-up) {
    //   max-width: $upper-boundary-desktop;
    // }
  }
</style>

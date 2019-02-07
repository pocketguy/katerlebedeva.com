<template>
  <div
    class="overlay"
  >
    <div
      class="close"
    >
      <button
        @click="toggleOverlay"
      >
        X
      </button>
    </div>
    <div
      class="links fs-3"
    >
      <p>
        <NuxtLink
          :to="localePath('index')"
        >
          {{ $t('projects') }}
        </NuxtLink>
      </p>
      <p>
        <NuxtLink
          :to="localePath('about-me')"
        >
          {{ $t('about me') }}
        </NuxtLink>
      </p>
      <p>
        <NuxtLink
          :to="localePath('contacts')"
        >
          {{ $t('contacts') }}
        </NuxtLink>
      </p>
    </div>
    <div />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';


export default {
    methods: {
        ...mapMutations({
            toggleOverlay: 'layout/toggleOverlay'
        })
    }
}
</script>

<style scoped lang="scss">
    .close {
        text-align: right;
        padding-right: 1rem;
    }
    .overlay {
        padding: 1rem;
        height: 100vh;
        display: flex;
        flex-direction: column
    }
    .links {
        margin: auto;
        text-align: center
    }
</style>


<template>
  <NuxtLink
    :to="to || src"
    :target="target"
    :style="{height: fillParent? '100%': 'initial'}"
    class="image-link"
  >
    <div
      v-if="title"
      class="title"
    >
      <span>{{ title }}</span>
    </div>
    <img
      :src="src || 'https://via.placeholder.com/512'"
      :alt="alt || title"
      :style="{height: fillParent? '100%': 'initial', objectFit: fillParent? 'cover': 'initial'}"
      class="image"
    >
  </NuxtLink>
</template>

<script>
  export default {
    props: {
      src: {
        required: true,
        type: String
      },
      to: {
        required: false,
        type: String,
        default: ''
      },
      alt: {
        required: false,
        type: String,
        default: ''
      },
      title: {
        required: false,
        type: String,
        default: ''
      },
      target: {
        required: false,
        type: String,
        default: ''
      },
      fillParent: {
        required: false,
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .image-link {
    position: relative;
  }
  .image-link, .image {
    display: block;
    width: 100%
  }
  .title {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,0);
    background: rgba(0,0,0,0);
    padding: 1rem;
  }

  .image-link:hover .title {
    color: rgba(255,255,255,1);
    background: rgba(0,0,0,.5)
  }

</style>

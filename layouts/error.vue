<template>
  <div class="container">
    <h1
      v-if="error.statusCode === 404"
    >
      404<br>Not Found
    </h1>
    <h1
      v-else
    >
      {{ error.statusCode }}<br>An error occurred
    </h1>
  </div>
</template>

<script>
  export default {
    props: {
      error: {
        type: Object,
        required: true
      }
    },
  }
</script>

<style lang="scss">
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

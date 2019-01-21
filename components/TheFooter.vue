<template>
  <footer class="footer">
    © {{ $t('katya lebedeva') }}, {{ currentYear }}
  </footer>
</template>

<script>
    export default {
      data() {
        return {
          currentYear: new Date().getUTCFullYear()
        }
      }
    }
</script>

<style scoped lang="scss">
</style>

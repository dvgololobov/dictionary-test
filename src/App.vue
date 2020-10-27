<template>
  <div id="app">
    <LoadProgress :load="isLoading"></LoadProgress>
    <MainLayout></MainLayout>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import LoadProgress from '@/components/global/LoadProgress'
export default {
  components: { LoadProgress, MainLayout },
  created () {
    this.$store.dispatch('LOAD_FAVORITE')
  },
  computed: {
    isLoading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style lang="scss">
</style>

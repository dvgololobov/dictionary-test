<template>
  <header id="topBar">
    <div class="row">
      <div class="col-xs-6 col-6 pa-md">
        <my-button @click.native="navigateTo({ name: 'Home' })" :active="$route.name === 'Home'">Word Keeper</my-button>
      </div>
      <div class="col-xs-6 col-6 pa-md text-right">
        <my-button @click.native="navigateTo({ name: 'Favorite' })" icon="star" :active="$route.name === 'Favorite'">Starred Words</my-button>
      </div>
    </div>
  </header>
</template>

<script>
import MyButton from '@/components/controls/my-button'
export default {
  name: 'TopBar',
  components: { MyButton },
  methods: {
    navigateTo (route) {
      if (this.$route.name !== route.name) {
        this.$router.push(route)
      }
    }
  }
}
</script>

<style scoped lang="scss">
#topBar {
  background-color: $primary;
}
</style>

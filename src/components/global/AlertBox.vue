<template>
  <div class="alert"><slot></slot></div>
</template>

<script>
export default {
  name: 'AlertBox'
}
</script>

<style scoped lang="scss">
.alert {
  background-color: $primary;
  padding: 1rem;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #fff;
  border-radius: 0.5rem;
}
</style>

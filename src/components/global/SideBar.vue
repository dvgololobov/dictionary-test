<template>
  <aside id="leftBar">
    <div class="sidebar pa-sm">
      <slot></slot>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style lang="scss" scoped>
.sidebar {
    background-color: $second;
  }
</style>

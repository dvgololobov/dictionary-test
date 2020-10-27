<template>
  <div class="button bg-primary">
    <div class="button-icon" v-if="icon" >
      <component :is="`${icon}-icon`" :fillColor="color" />
    </div>
    <div class="button-text" :style="{ color }" :class="{ 'button-text-icon': icon, 'button-text-active': active }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean
    },
    icon: {
      type: String
    },
    color: {
      type: String,
      default: '#ffffff'
    },
    text: {
      type: Boolean,
      default: false
    }
  },
  name: 'my-button'
}
</script>

<style scoped>
  .button {
    display: inline-block;
    padding: 0.4rem;
    cursor: pointer;
  }
  .button:hover .button-main-text{
    font-weight: bold;
  }
  .button-icon {
    display: inline-block;
    position: relative;
    top: 0.4rem;
  }
  .button-text {
    display: inline-block;
    height: 24px;
    line-height: 24px;
  }
  .button-text-active {
    font-weight: bold;
  }
  .button-text-icon {
    padding-left: 0.3rem;
  }
</style>

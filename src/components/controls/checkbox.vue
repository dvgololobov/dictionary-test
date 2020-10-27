<template>
  <div class="pa-sm checkbox" @click="checkboxChange" >
    <div class="checkbox-icon">
      <checkbox-marked-icon fillColor="#0ea2ed" v-if="checkValue === true"></checkbox-marked-icon>
      <checkbox-blank-icon fillColor="#fff" v-else></checkbox-blank-icon>
    </div>
    <div class="checkbox-label">
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      checkValue: this.value
    }
  },
  methods: {
    checkboxChange () {
      this.checkValue = !this.checkValue
      this.$emit('input', this.checkValue)
    }
  }
}
</script>

<style scoped>
.checkbox-icon {
  display: inline-block;
  position: relative;
  top: 0.4em;
}
.checkbox-label {
  display: inline-block;
  padding-left: 0.4em;
}
.checkbox {
  cursor: pointer;
}
</style>

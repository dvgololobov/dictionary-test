<template>
  <div>
    <input class="input-field" ref="input" :disabled="disabled" v-model="searchText" placeholder="Type text to search word..." @input="inputText" />
    <div class="input-hint" v-show="hint !== null">{{ hint }}</div>
  </div>
</template>

<script>
export default {
  name: 'text-field',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: null
    },
    hint: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      searchText: this.value
    }
  },
  methods: {
    inputText () {
      this.$emit('input', this.searchText)
    }
  },
  mounted () {
    ['keyup', 'keydown', 'keypress', 'focus', 'blur'].map(event => {
      this.$refs.input.addEventListener(event, $event => this.$emit(event, $event))
    })
  }
}
</script>

<style scoped lang="scss">
  .input-field {
    display: block;
    width: 100%;
    border: 1px solid $primary;
    padding: 0.4rem;
    border-radius: 5px;
  }
  .input-hint {
    padding: 0.2rem;
    font-size: 0.75rem;
    line-height: 1rem;
    color: $dark;
  }
</style>

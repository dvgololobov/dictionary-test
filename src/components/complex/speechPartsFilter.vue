<template>
  <div id="speechFilter">
    <checkbox v-for="(field, i) in filter" :key="i" v-model="filter[i].value" @input="setFilter" :label="field.label"></checkbox>
  </div>
</template>

<script>
import Checkbox from '@/components/controls/checkbox'
export default {
  name: 'speechPartsFilter',
  components: { Checkbox },
  data () {
    return {
      filter: [
        {
          name: 'adjective',
          label: 'adjective',
          value: false
        },
        {
          name: 'verb',
          label: 'verb',
          value: false
        },
        {
          name: 'pronoun',
          label: 'pronoun',
          value: false
        },
        {
          name: 'adverb',
          label: 'adverb',
          value: false
        },
        {
          name: 'preposition',
          label: 'preposition',
          value: false
        },
        {
          name: 'conjunction',
          label: 'conjunction',
          value: false
        },
        {
          name: 'interjection',
          label: 'interjection',
          value: false
        }
      ]
    }
  },
  methods: {
    setFilter () {
      this.$store.dispatch('SET_FILTER', this.filter)
    }
  }
}
</script>

<style scoped>

</style>

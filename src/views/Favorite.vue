<template>
  <div class="favorite">
    <word-list draggable @sort="setFavorite" :items="words"></word-list>
    <AlertBox v-if="words.length === 0 && searchText === ''">No favorite words</AlertBox>
    <AlertBox v-else-if="words.length === 0 && searchText !== ''">No favorite words found</AlertBox>
  </div>
</template>

<script>
import WordList from '@/components/complex/wordList/word-list'
import AlertBox from '@/components/global/AlertBox'
export default {
  components: { AlertBox, WordList },
  computed: {
    words () {
      const text = this.searchText.toLowerCase()
      const filterTruth = this.$store.getters.filter
        .filter(f => f.value === true)
      const words = this.$store.getters.favorite
        .filter(w => {
          const search = w.word.toLowerCase().indexOf(text) > -1
          if (filterTruth.length > 0 && search === true) {
            const filtered = filterTruth.findIndex(f => f.name === w.part) > -1
            return filtered
          }
          return search
        })
      return words
    },
    searchText () {
      return this.$store.getters.searchText
    }
  },
  methods: {
    setFavorite (data) {
      this.$store.dispatch('SET_FAVORITE', data)
    }
  }
}
</script>

<template>
  <div class="home">
    <word-list v-show="words.length > 0" :items="words"></word-list>
    <AlertBox v-show="words.length === 0">No search results</AlertBox>
  </div>
</template>
<script>
import WordList from '@/components/complex/wordList/word-list'
import AlertBox from '@/components/global/AlertBox'
export default {
  components: { AlertBox, WordList },
  computed: {
    words () {
      return this.$store.getters.foundedWords
    }
  }
}
</script>

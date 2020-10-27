<template>
  <div class="word">
    <div v-if="word !== null">
      <div class="row">
        <div class="col-12">
          <h1 class="word-title">
            {{ word.word }}
            <span class="word-favorite-icon">
              <star-icon v-if="wordInFavorites === true && word.results" @click="removeFromFavorite" fillColor="#0ea2ed"></star-icon>
              <star-outline-icon v-else-if="word.results" @click="addToFavorite" fillColor="#0ea2ed"></star-outline-icon>
            </span>
          </h1>
          <p class="word-pronunciation text-italic pa-md" v-if="word.pronunciation">pronunciation: <b>{{ word.pronunciation.all }}</b></p>
          <div class="word-definition pa-md" v-if="!word.results">No definitions found</div>
          <div class="word-definiton pa-md" v-for="(info, i) in word.results" :key="i">
            - {{ info.definition }}
            <p class="text-italic">{{ info.partOfSpeech }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <AlertBox>No results</AlertBox>
    </div>
  </div>
</template>

<script>
import AlertBox from '@/components/global/AlertBox'
export default {
  components: { AlertBox },
  data () {
    return {
      word: null
    }
  },
  computed: {
    wordInFavorites () {
      const favs = this.$store.getters.favorite
      return favs.findIndex(fav => fav.word === this.word.word) > -1
    }
  },
  methods: {
    addToFavorite () {
      const word = {
        word: this.word.word,
        description: this.word.results[0]?.definition || null,
        part: this.word.results[0]?.partOfSpeech || null
      }
      this.$store.dispatch('ADD_FAVORITE_ITEM', word)
    },
    removeFromFavorite () {
      const word = {
        word: this.word.word,
        description: this.word.results[0]?.definition || null,
        part: this.word.results[0]?.partOfSpeech || null
      }
      this.$store.dispatch('REMOVE_FAVORITE_ITEM', word)
    },
    async getWord () {
      try {
        this.$store.dispatch('LOADING', true)
        const { data } = await this.$http.get(`words/${this.$route.params.word}`)
        this.word = data
      } catch (e) {
        console.log('get word err', e)
      } finally {
        this.$store.dispatch('LOADING', false)
      }
    }
  },
  mounted () {
    this.getWord()
  }
}
</script>

<style>
  .word-favorite-icon {
    cursor: pointer;
  }
</style>

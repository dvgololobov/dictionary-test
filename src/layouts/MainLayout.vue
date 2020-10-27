<template>
  <div>
    <TopBar/>
    <div class="row">
      <div class="col-xs-12 col-sm-4 col-3 pa-md">
        <SideBar>
          <text-field :disabled="isLoading" :hint="`Type text (at least 3 characters) and press Enter`" v-model="searchText" @keyup.enter="searchWords"></text-field>
          <div class="pa-md" v-if="$route.name === 'Favorite'">
            <speech-parts-filter></speech-parts-filter>
          </div>
        </SideBar>
      </div>
      <div class="col-xs-12 col-sm-8 col-9 pa-md">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/global/TopBar'
import SideBar from '@/components/global/SideBar'
import TextField from '@/components/controls/text-field'
import SpeechPartsFilter from '@/components/complex/speechPartsFilter'
export default {
  name: 'MainLayout',
  components: {
    SpeechPartsFilter,
    TextField,
    SideBar,
    TopBar
  },
  computed: {
    isLoading: {
      get () {
        return this.$store.getters.loading
      },
      set (val) {
        this.$store.dispatch('LOADING', val)
      }
    }
  },
  data () {
    return {
      searchText: '',
      results: []
    }
  },
  methods: {
    async searchWords () {
      this.$store.dispatch('SET_SEARCH_TEXT', this.searchText)
      if (this.$route.name !== 'Favorite' && this.searchText.length >= 3 && !this.isLoading) {
        try {
          this.isLoading = true
          const { data: { results: { data: words } } } = await this.$http.get('words/', {
            params: {
              letterPattern: `^${this.searchText.toLowerCase()}[a-z]*$`,
              limit: 10,
              page: 1
            }
          })
          this.results = []
          for (const word of words) {
            const { data } = await this.$http.get(`words/${word}/definitions`, {
              params: {
                letterPattern: `^${this.searchText.toLowerCase()}[a-z]*$`,
                limit: 10,
                page: 1
              }
            })
            this.results.push({
              word: data.word,
              part: data.definitions[0]?.partOfSpeech || null,
              description: data.definitions[0]?.definition || null
            })
            this.$store.dispatch('SET_FOUNDED', this.results)
            if (this.$route.name !== 'Home') this.$router.push({ name: 'Home' })
          }
        } catch (e) {
          console.log('get words data err', e)
        } finally {
          this.isLoading = false
        }
      }
    }
  }
}
</script>

<style scoped>

</style>

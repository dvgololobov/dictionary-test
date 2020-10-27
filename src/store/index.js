import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const loadDataFromDB = () => localStorage.getItem('favorites') || JSON.stringify([])
const setDataToDB = data => localStorage.setItem('favorites', JSON.stringify(data))

export default new Vuex.Store({
  state: {
    favorite: [],
    searchText: '',
    foundedWords: [],
    isLoading: false,
    filter: []
  },
  mutations: {
    setFilter: (state, filter) => {
      state.filter = filter
    },
    loadingSet: (state, status) => {
      state.isLoading = status
    },
    setFavorite: (state, favorite) => {
      state.favorite = favorite
    },
    setSearchText: (state, text) => {
      state.searchText = text
    },
    removeFromFavorite: (state, item) => {
      const wordIndex = state.favorite.findIndex(w => w.word === item.word)
      if (wordIndex > -1) {
        state.favorite.splice(wordIndex, 1)
      }
    },
    addFavorite: (state, item) => {
      state.favorite.push(item)
    },
    setFounded: (state, words) => {
      state.foundedWords = words
    }
  },
  getters: {
    filter: state => state.filter,
    loading: state => state.isLoading,
    favorite: state => state.favorite,
    foundedWords: state => state.foundedWords,
    searchText: state => state.searchText
  },
  actions: {
    SET_FOUNDED: (store, words) => {
      store.commit('setFounded', words)
    },
    SET_FAVORITE: (store, favorite) => {
      store.commit('setFavorite', favorite)
      setDataToDB(store.state.favorite)
    },
    REMOVE_FAVORITE_ITEM: (store, item) => {
      store.commit('removeFromFavorite', item)
      setDataToDB(store.state.favorite)
    },
    ADD_FAVORITE_ITEM: (store, item) => {
      store.commit('addFavorite', item)
      setDataToDB(store.state.favorite)
    },
    LOAD_FAVORITE: ({ commit }) => {
      const data = loadDataFromDB()
      commit('setFavorite', JSON.parse(data))
    },
    SET_SEARCH_TEXT: ({ commit }, text) => {
      commit('setSearchText', text)
    },
    LOADING: ({ commit }, status) => {
      commit('loadingSet', status)
    },
    SET_FILTER: ({ commit }, filter) => {
      commit('setFilter', filter)
    }
  },
  modules: {
  }
})

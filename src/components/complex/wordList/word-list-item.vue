<template>
  <div class="pa-sm pt-md pb-md" @dragstart="dragElement" @dragover="dragOverElement" :draggable="draggable">
    <div class="row rounded" :style="{ backgroundColor: '#eee' }">
      <div class="word-drag-icon col pa-sm pt-md pb-md" style="max-width: 40px;" v-if="draggable">
        <drag-horizontal-icon></drag-horizontal-icon>
      </div>
      <div class="word text-bold col-2 pa-xs pt-md pb-md pl-md">
        <router-link :to="{ name: 'Word', params: { word: item.word }}">{{ item.word }}</router-link>
      </div>
      <div class="word-speech-part text-italic col-xs-3 col-2 pa-xs pt-md pb-md pr-md">{{ item.part }}</div>
      <div class="word-description col pa-xs pt-md pb-md">
        {{ item.description }}
      </div>
      <div class="word-favorite-icon text-italic col-1 pa-xs pt-md pb-md text-center" style="max-width: 40px;">
        <star-icon v-if="wordInFavorites === true" @click="removeFromFavorite" fillColor="#0ea2ed"></star-icon>
        <star-outline-icon v-else @click="addToFavorite" fillColor="#0ea2ed"></star-outline-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    draggable: {
      type: Boolean,
      default: false
    }
  },
  name: 'word-list-item',
  computed: {
    wordInFavorites () {
      const favs = this.$store.getters.favorite
      return favs.findIndex(fav => fav.word === this.item.word) > -1
    }
  },
  methods: {
    dragOverElement (e) {
      this.$emit('dragover', e)
    },
    dragElement (e) {
      this.$emit('dragstart', e)
    },
    addToFavorite () {
      this.$store.dispatch('ADD_FAVORITE_ITEM', this.item)
    },
    removeFromFavorite () {
      this.$store.dispatch('REMOVE_FAVORITE_ITEM', this.item)
    }
  }
}
</script>

<style scoped>
.word-drag-icon {
  cursor: move;
}
.word-favorite-icon {
  padding-right: 34px;
  cursor: pointer;
}
.word-description {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

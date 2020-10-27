<template>
  <div class="word-list">
    <div class="drop-zone" v-for="(word, i) in list" :key="i" @drop="onDrop($event, i)">
      <word-list-item
          :draggable="draggable"
          :item="word"
          @dragstart="dragStart($event, i)"
          @dragover.prevent
      ></word-list-item>
    </div>
  </div>
</template>

<script>
import WordListItem from '@/components/complex/wordList/word-list-item'
export default {
  name: 'word-list',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    draggable: {
      type: Boolean,
      default: false
    }
  },
  components: { WordListItem },
  data () {
    return {
      list: this.items
    }
  },
  watch: {
    items () {
      this.list = this.items
    }
  },
  methods: {
    onDrop (e, targetIndex) {
      const dragIndex = +e.dataTransfer.getData('wordIndex')
      const copyDraggedElement = { ...this.list[dragIndex] }
      const copyTargetElement = { ...this.list[targetIndex] }
      if (targetIndex > dragIndex) {
        this.list.splice(targetIndex, 1, copyTargetElement, copyDraggedElement)
        this.list.splice(dragIndex, 1)
      }
      if (targetIndex < dragIndex) {
        this.list.splice(targetIndex, 1, copyDraggedElement, copyTargetElement)
        this.list.splice(dragIndex + 1, 1)
      }
      this.$emit('sort', this.list)
    },
    dragStart (e, index) {
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('wordIndex', index)
    }
  }
}
</script>

<style scoped>
</style>

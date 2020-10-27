<template>
  <div class="loader-overlay" v-show="showLoader">
    <div class="row">
      <div class="col-12 text-center">
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadProgress',
  props: {
    load: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showLoader: false
    }
  },
  watch: {
    load (val) {
      this.showLoader = val
    }
  }
}
</script>

<style scoped lang="scss">
.loader-overlay {
  background: rgba(0, 0, 0, .7);
  height: 100%;
  width: 100%;
  position: absolute;
  color: #fff;
  top: 0;
  left: 0;
  z-index: 10000;
}
.loader {
  border: 16px solid #fff;
  border-top: 16px solid $primary;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 10001;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

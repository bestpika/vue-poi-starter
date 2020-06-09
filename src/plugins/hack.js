export default {
  install (Vue, options) { // eslint-disable-line no-unused-vars
    Vue.prototype.$hack = function () {
      console.info('this.$hack()')
    }
    Vue.mixin({
      created () {
        console.info('created')
      }
    })
  }
}

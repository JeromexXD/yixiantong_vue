<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">

    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
  export default {
    name: '',
    data () {
      return {

      }
    },
    mounted () {
      this.scroll = new BetterScroll(this.$refs.wrapper);
    }
  }
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <no-data-tip v-show="tipShow"></no-data-tip>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

import NoDataTip from 'components/ScrollWrapper/Sub/NoDataTip'
  export default {
    name: 'SearchScrollWrapper',
    components: {
      NoDataTip
    },
    data () {
      return {
        tipShow: true
      }
    },
    mounted () {
      this.scroll = new BetterScroll(this.$refs.wrapper);
    }
  }
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="container">
    <common-header :title="title"></common-header>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common'

  export default {
    name: 'Search',
    data () {
      return {
        title: '商家搜索'
      }
    },
    components: {
      CommonHeader
    }
  }
</script>

<style lang="scss" scoped>

</style>
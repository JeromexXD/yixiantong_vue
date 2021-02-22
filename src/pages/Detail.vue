<template>
  <div class="container">
    <common-header :title="title"></common-header>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common'
  export default {
    name: 'Detail',
    data () {
      return {
        title: '详情信息'
      }
    },
    components: {
      CommonHeader
    }
  }
</script>

<style lang="scss" scoped>

</style>
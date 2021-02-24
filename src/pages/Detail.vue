<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <detail-scroll-wrapper></detail-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common'
import DetailScrollWrapper from 'components/ScrollWrapper/Detail'
  export default {
    name: 'Detail',
    data () {
      return {
        title: '详情信息'
      }
    },
    components: {
      CommonHeader,
      DetailScrollWrapper
    }
  }
</script>

<style lang="scss" scoped>

</style>
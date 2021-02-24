<template>
  <div class="detail-recom">
    <detail-title 
      :icon="icon"
      :title="title">
    </detail-title>
    <div class="recom">
      {{ recom }}
    </div>
  </div>
</template>

<script>
import DetailTitle from './Title'

  export default {
    name: 'DetailRecom',
    props: {
      recom: String
    },
    components: {
      DetailTitle
    },
    data () {
      return {
        icon: 'icon-recom',
        title: '推荐菜品'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .recom {
    padding: .12rem;
    font-size: .16rem;
    text-indent: .32rem;
    line-height: .20rem;
    background-color: #fff;
  }
</style>
<template>
  <div class="detail-intro">
    <detail-title 
      :icon="icon"
      :title="title">
    </detail-title>
    <div class="intro">
      {{ intro }}
    </div>
  </div>
</template>

<script>
import DetailTitle from './Title'

  export default {
    name: 'DetailIntro',
    props: {
      intro: {
        type: String,
        default () {
          return '加载中...'
        }
      }
    },
    data () {
      return {
        icon: 'icon-intro',
        title: '详细介绍'
      }
    },
    components: {
      DetailTitle
    }
  }
</script>

<style lang="scss" scoped>
  .intro {
    padding: .12rem;
    font-size: .16rem;
    text-indent: .32rem;
    line-height: .20rem;
    background-color: #fff;
  }
</style>
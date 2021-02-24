<template>
  <div class="common-keyword">
    <detail-title 
      :icon="icon"
      :title="title">
    </detail-title>
    <div class="keyword-wrap">
      <span class="keyword"
            v-for="(item, index) of keyword"
            :key="index">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
import DetailTitle from './Title'

  export default {
    name: 'DetailCommentKeyword',
    props: {
      keyword: Array
    },
    components: {
      DetailTitle
    },
    data () {
      return {
        icon: 'icon-haoping',
        title: '评论关键词'
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';
  .keyword-wrap {
    @include flex-row;
    flex-wrap: wrap;
    padding: .12rem;
    background-color: #fff;

    .keyword {
      font-size: .16rem;
      margin: .03rem;
      padding: .02rem;
      border: 1px solid $defaultGreen;
      border-radius: .03rem;
      color: $defaultGreen;
    }
  }
</style>
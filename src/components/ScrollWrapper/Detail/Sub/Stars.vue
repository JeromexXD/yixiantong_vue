<template>
  <div class="detail-stars">
    <span class="iconfont icon-smile"></span>
    <stars :starNum="starNum"></stars>
    <span class="score">{{ score }}分</span>
  </div>
</template>

<script>
import Stars from 'components/ScrollWrapper/Sub/Stars'

  export default {
    name: 'DetailStars',
    props: {
      starNum: Number,
      score: {
        type: String,
        default () {
          return '...'
        }
      }
    },
    components: {
      Stars
    }
  }
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

  .detail-stars {
    @include flex-row;
    align-items: center;
    height: .5rem;
    padding-left: .12rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;

    .icon-smile {
      font-size: .18rem;
      margin-right: .1rem;
    }

    >>>.icon-star {
      vertical-align: .05rem;
    }

    .score {
      margin-left: .1rem;
      color: $starColor;
      font-size: .16rem;
    }
  }
</style>
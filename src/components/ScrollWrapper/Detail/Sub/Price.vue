<template>
  <div class="detail-price">
    <span class="iconfont icon-price"></span>
    <span class="price">￥{{ price }}起</span>
  </div>
</template>

<script>
export default {
  name: 'DetailPrice',
  props: {
    price: {
      type: String,
      default () {
        return '加载中...'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

  .detail-price {
    @include flex-row;
    align-items: center;
    height: .5rem;
    padding-left: .12rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;

    .iconfont {
      font-size: .18rem;
    }

    .price {
      @include ellipsis;
      margin-left: .1rem;
      font-size: .16rem;
      font-weight: bold;
      color: $defaultOrange;
    }
  }
</style>
<template>
  <div class="detail-address">
    <span class="iconfont icon-positioning"></span>
    <span class="address">{{ address }}</span>
  </div>
</template>

<script>
  export default {
    name: 'DetailAddress',
    props: {
      address: {
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

  .detail-address {
    @include flex-row;
    align-items: center;
    height: .5rem;
    padding-left: .12rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;

    .iconfont {
      font-size: .18rem;
    }

    .address {
      @include ellipsis;
      margin-left: .1rem;
      font-size: .16rem;
    }
  }
</style>
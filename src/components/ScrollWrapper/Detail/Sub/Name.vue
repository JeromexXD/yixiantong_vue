<template>
  <div class="detail-name">
    <span class="iconfont icon-name"></span>
    <span class="name">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailName',
  props: {
    name: {
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

  .detail-name {
    @include flex-row;
    align-items: center;
    height: .5rem;
    padding-left: .12rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;

    .iconfont {
      font-size: .18rem;
    }

    .name {
      @include ellipsis;
      margin-left: .1rem;
      font-size: .16rem;
    }
  }
</style>
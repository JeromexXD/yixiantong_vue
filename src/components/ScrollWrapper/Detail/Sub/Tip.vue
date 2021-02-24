<template>
  <div class="detail-tip">
    <span class="iconfont icon-tip"></span>
    <span class="tip">{{ tip }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailTip',
  props: {
    tip: {
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

  .detail-tip {
    @include flex-row;
    align-items: center;
    min-height: .5rem;
    padding-left: .12rem;
    line-height: .18rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;

    .iconfont {
      font-size: .18rem;
    }

    .tip {
      margin-left: .1rem;
      font-size: .16rem;
    }
  }
</style>
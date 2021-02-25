<template>
  <div class="no-data-tip">
    <span class="text">- 暂无相关数据 -</span>
  </div>
</template>

<script>
  export default {
    name: 'NoDataTip'
  }
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

  .no-data-tip {
    @include flex-row;
    @include vh-center;
    height: 3rem;
    background-color: #ededed;

    .text {
      font-size: .18rem;
      color: #989898;
    }
  }
</style>
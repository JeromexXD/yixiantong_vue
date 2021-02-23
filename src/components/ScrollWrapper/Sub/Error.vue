<template>
  <div class="error">
    <span class="iconfont icon-error"></span>
    <span class="text">网络走丢了~</span>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {

  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

  .error {
    @include flex-column;
    justify-content: center;
    align-items: center;
    height: 3rem;
    background-color: #ededed;

    .iconfont {
      font-size: .38rem;
    }

    .text {
      margin-top: .12rem;
      font-size: .18rem;
    }
  }
</style>
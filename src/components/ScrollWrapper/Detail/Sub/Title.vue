<template>
  <div class="detail-title">
    <span :class="['iconfont', icon]"></span>
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailTitle',
  props: {
    title: String,
    icon: String
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';
  .detail-title {
    @include flex-row;
    align-items: center;
    height: .5rem;
    margin-top: .1rem;
    padding-left: .12rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    font-size: .18rem;
    color: $defaultGreen;

    .iconfont {
      font-size: .18rem;
      margin-right: .1rem;
    }

  }
</style>
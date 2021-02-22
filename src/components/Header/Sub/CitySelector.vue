<template>
  <div class="city">
    <router-link to="city">
      <span class="city-name">全部</span>
      <span class="iconfont icon-header-arrow"></span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CitySelector'
  }
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';
  .city {
    width: .6rem;
    height: $headerHeight;

    a {
      @include flex-row;
      @include vh-center;
      width: 100%;
      height: 100%;

      .city-name {
        font-size: .16rem;
      }

      .iconfont {
        font-size: .08rem;
        margin-left: .02rem;
      }
    }
  }
</style>
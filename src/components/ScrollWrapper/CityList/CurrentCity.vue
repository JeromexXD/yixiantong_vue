<template>
  <div class="current-city">
    当前城市：
    <router-link to="/">
      <span class="iconfont icon-positioning"></span>
      {{ cityName }}
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    name: 'CurrentCity',
    computed: {
      ...mapState(['cityName'])
    }
  }
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

  .current-city {
    height: $headerHeight;
    padding-left: .12rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    font-size: .16rem;
    line-height: .5rem;

    .iconfont {
      color: $starColor;
    }
  }
</style>
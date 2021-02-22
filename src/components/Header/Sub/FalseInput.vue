<template>
  <div class="false-input">
    <router-link to="Search">
      <div class="input">
        <span class="iconfont icon-header-search"></span>
        <span class="placeholder">{{ placeholderText }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'FalseInput',
    data () {
      return {
        placeholderText: '美食 / 景点 / 酒店 / 按摩 / KTV'
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
  .false-input {
    flex: 1;
    height: 100%;
    padding: .08rem .12rem;
    box-sizing: border-box;

    .input {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border-radius: .03rem;
      line-height: .25rem;
      background-color: #fff;

      .iconfont {
        font-size: .18rem;
        margin-left: .12rem;
        vertical-align: -.02rem;
      }

      .placeholder {
        font-size: .14rem;
      }
    }
  }
</style>
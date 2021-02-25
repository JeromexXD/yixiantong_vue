<template>
  <div class="search-input">
    <span class="iconfont icon-header-search"></span>
    <input class="input" type="text"    
           :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data () {
    return {
      placeholder: '美食 / 景点 / 酒店 / 按摩 / KTV'
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-input {
    position: relative;
    height: .5rem;
    padding: .08rem .2rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;

    .iconfont {
      position: absolute;
      top: .16rem;
      left: .3rem;
      font-size: .18rem;
    }

    .input {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: .05rem;
      text-indent: .34rem;
      font-size: .16rem;
    }
  }
</style>
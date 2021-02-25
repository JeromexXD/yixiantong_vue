<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <search-input></search-input>
    <search-scroll-wrapper></search-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common'
import SearchInput from 'components/SearchInput/Index'
import SearchScrollWrapper from 'components/ScrollWrapper/Search'

  export default {
    name: 'Search',
    data () {
      return {
        title: '商家搜索'
      }
    },
    components: {
      CommonHeader,
      SearchInput,
      SearchScrollWrapper
    }
  }
</script>

<style lang="scss" scoped>

</style>
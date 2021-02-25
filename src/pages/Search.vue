<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <search-input @onSearch="onSearch"></search-input>
    <search-scroll-wrapper :data="data"></search-scroll-wrapper>
  </div>
</template>

<script>
import tools from 'utils/tools'

import CommonHeader from 'components/Header/Common'
import SearchInput from 'components/SearchInput/Index'
import SearchScrollWrapper from 'components/ScrollWrapper/Search'

  export default {
    name: 'Search',
    data () {
      return {
        title: '商家搜索',
        data: {}
      }
    },
    components: {
      CommonHeader,
      SearchInput,
      SearchScrollWrapper
    },
    methods: {
      onSearch (res) {
        if (res && res.status === 0) {
          const data = res.data;

          data.foodDatas = tools.formatJSON(data.foodDatas, 'keyword');
          this.data = data;
        } else {
          this.data = res
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
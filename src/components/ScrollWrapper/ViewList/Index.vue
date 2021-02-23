<template>
  <div class="view-list">
    <view-list-sub 
      v-for="item of viewDatas"
      :key="item.id"
      :data="item">
    </view-list-sub>
  </div>
</template>

<script>
import ViewListSub from './Sub'

  export default {
    name: 'ViewList',
    props: {
      viewDatas: Array
    },
    components: {
      ViewListSub
    }
  }
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
  .view-list {
    @include flex-row;
    flex-wrap: wrap;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }
</style>
<template>
  <div class="open-date-time">
    <span class="iconfont icon-datetime"></span>
    <span class="date-time">{{ dateTime }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailOpenDateTime',
  props: {
    dateTime: {
      type: String,
      default () {
        return '加载中...'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

  .open-date-time {
    @include flex-row;
    align-items: center;
    min-height: .5rem;
    padding-left: .12rem;
    line-height: .18rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;

    .iconfont {
      font-size: .18rem;
    }

    .date-time {
      margin-left: .1rem;
      font-size: .16rem;
    }
  }
</style>
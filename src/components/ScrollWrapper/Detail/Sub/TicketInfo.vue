<template>
  <div class="ticket-info">
    <detail-title 
      :icon="icon"
      :title="title">
    </detail-title>
    <div class="info">
      {{ ticketInfo }}
    </div>
  </div>
</template>

<script>
import DetailTitle from './Title'

  export default {
    name: 'DetailTicketInfo',
    props: {
      ticketInfo: {
        type: String,
        default () {
          return '加载中...'
        }
      }
    },
    data () {
      return {
        icon: 'icon-info',
        title: '购票信息'
      }
    },
    components: {
      DetailTitle
    }
  }
</script>

<style lang="scss" scoped>
  .info {
    padding: .12rem;
    font-size: .16rem;
    text-indent: .32rem;
    line-height: .20rem;
    background-color: #fff;
  }
</style>
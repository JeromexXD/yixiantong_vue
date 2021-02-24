<template>
  <div class="detail-service">
    <detail-title 
      :icon="icon"
      :title="title">
    </detail-title>
    <div class="service">
      <span class="park">
        停车场：
          <em v-if="parking">有</em>
          <em v-else>无</em>
        </span>
      <span class="wifi">
        WIFI：
          <em v-if="wifi">有</em>
          <em v-else>无</em>
      </span>
    </div>
  </div>
</template>

<script>
import DetailTitle from './Title'

  export default {
    name: 'DetailService',
    props: {
      parking: {
        type: Boolean,
        default () {
          return false
        }
      },
      wifi: {
        type: Boolean,
        default () {
          return false
        }
      }
    },
    data () {
      return {
        icon: 'icon-service',
        title: '商家服务'
      }
    },
    components: {
      DetailTitle
    }
  }
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
  .service {
    @include flex-column;
    padding: .12rem;
    font-size: .16rem;
    line-height: .20rem;
    font-weight: bold;
    color: #989898;
    background-color: #fff;

    .wifi {
      margin-top: .1rem;
    }
  }
</style>
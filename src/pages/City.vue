<template>
  <div class="container">
    <common-header :title="title"></common-header>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common'

  export default {
    name: 'City',
    data () {
      return {
        title: '城市选择'
      }
    },
    components: {
      CommonHeader
    }
  }
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="ktv-list">
    <ktv-list-sub 
      v-for="item of ktvDatas"
      :key="item.id"
      :data="item">
    </ktv-list-sub>
  </div>
</template>

<script>
import ktvListSub from './Sub'

  export default {
    name: 'ktvList',
    props: {
      ktvDatas: Array
    },
    components: {
      ktvListSub
    }
  }
</script>

<style>

</style>
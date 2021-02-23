<template>
  <div class="massage-list">
    <massage-list-sub 
      v-for="item of massageDatas"
      :key="item.id"
      :data="item">
    </massage-list-sub>
  </div>
</template>

<script>
import MassageListSub from './Sub'

  export default {
    name: 'MassageList',
    props: {
      massageDatas: Array
    },
    components: {
      MassageListSub
    }
  }
</script>

<style>

</style>
<template>
  <div class="hotel-list">
    <hotel-list-sub v-for="item of hotelDatas"
                    :key="item.id"
                    :data="item"> 
    </hotel-list-sub>
  </div>
</template>

<script>
import HotelListSub from './Sub'

  export default {
    name: 'HotelList',
    props: {
      hotelDatas: Array
    },
    components: {
      HotelListSub
    }
  }
</script>

<style>

</style>
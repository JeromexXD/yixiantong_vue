<template>
  <div class="city-list">
    <city-list-sub v-for="item of cityInfo"
                   :key="item.cityId"
                   :cityInfo = item>

    </city-list-sub>
  </div>
</template>

<script>
import cities from 'data/cities'

import CityListSub from './Sub'

  export default {
    name: 'CityList',
    data () {
      return {
        cityInfo: cities
      }
    },
    components: {
      CityListSub
    }
  }
</script>

<style>

</style>
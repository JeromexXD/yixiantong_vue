<template>
  <div class="city-list-sub"
       @click="changeCity(cityInfo)">
    <span class="item">{{ cityInfo.cityName }}</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

  export default {
    name: 'CityListSub',
    props: {
      cityInfo: Object
    },
    methods: {
      ...mapMutations(['selectCity']),
      changeCity (cityInfo) {
        this.selectCity(cityInfo);
        this.$router.push({path: '/'});
      }
    }
  }
</script>

<style lang="scss" scoped>
.city-list-sub {
  height: .5rem;
  padding-left: .12rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  font-size: .16rem;
  line-height: .5rem;
}
</style>
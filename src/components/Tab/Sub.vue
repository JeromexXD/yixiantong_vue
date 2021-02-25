<template>
  <span 
    :class="['tab-sub', {active: cityInfo.cityId === cityId}]"
    @click="changeCity(cityInfo)">
    {{ cityInfo.cityName }}
  </span>
</template>

<script>
import { mapState , mapMutations } from 'vuex'

  export default {
    name: 'TabSub',
    props: {
      cityInfo: Object
    },
    computed: {
      ...mapState(['cityId'])
    },
    methods: {
      ...mapMutations(['selectCity']),
      changeCity (cityInfo) {
        this.selectCity(cityInfo);
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

  .tab-sub {
    flex: 1;
    text-align: center;
    line-height: .5rem;
    font-size: .16rem;
    border-bottom: 3px solid transparent;
    box-sizing: border-box;

    &.active {
      color: $defaultGreen;
      border-bottom: 3px solid $defaultGreen;
    }
  }
</style>
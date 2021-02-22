<template>
  <header class="header">
    <city-selector :city="city"></city-selector>
    <false-input></false-input>
  </header>
</template>

<script>
import CitySelector from './Sub/CitySelector'
import FalseInput from './Sub/FalseInput'

  export default {
    name: 'HomeHeader',
    data () {
      return {
        city: '',
        placeholder: '...'
      }
    },
    components: {
      CitySelector,
      FalseInput
    }
  }
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';
  .header {
    @include flex-row;
    height: $headerHeight;
    background-color: $defaultBgColor;
  }
</style>
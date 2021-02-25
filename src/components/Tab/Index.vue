<template>
  <div class="tab">
    <tab-sub v-for="item of cities"
             :key="item.id"
             :cityInfo="item">
    </tab-sub>
  </div>
</template>

<script>
import cities from 'data/cities'

import TabSub from './Sub'

  export default {
    name: 'Tab',
    data () {
      return {
        cities
      }
    },
    components: {
      TabSub
    }
  }
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

  .tab {
    @include flex-row;
    height: .5rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }
</style>
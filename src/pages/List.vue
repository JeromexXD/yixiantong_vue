<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <tab></tab>
    <list-scroll-wrapper></list-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common'
import { mapState } from 'vuex'
import fields from 'data/fields'

import Tab from 'components/Tab'
import ListScrollWrapper from 'components/ScrollWrapper/List'

  export default {
    name: 'List',
    data () {
      return {
        fields
      }
    },
    computed: {
      ...mapState(['field']),
      title () {
        if (this.field) {
          return this.fields.filter(item => item['field'] === this.field)[0].iconText + '列表'
        }
      }
    },
    components: {
      CommonHeader,
      ListScrollWrapper,
      Tab
    }
  }
</script>

<style lang="scss" scoped>

</style>
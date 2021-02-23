<template>
  <div class="icons-wrap">
    <category-icon-sub v-for="item of fields"
                       :key="item.id"
                       :fieldInfo="item"></category-icon-sub>
  </div>
</template>

<script>
import fields from 'data/fields'

import CategoryIconSub from './Sub'
export default {
  name: 'CategoryIcons',
  data () {
    return {
      fields
    }
  },
  components: {
    CategoryIconSub
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';
  .icons-wrap {
    @include flex-row;
    justify-content: space-between;
    height: 1.06rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
  }
</style>
<template>
  <div class="common-header">
    <back-ward></back-ward>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import BackWard from './Sub/BackWard';
  export default {
    name: 'CommonHeader',
    props: {
      title: {
        type: String,
        default () {
          return '一线生活通'
        }
      }
    },
    components: {
      BackWard
    }
  }
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.common-header {
  @include flex-row;
  @include vh-center;
  position: relative;
  height: $headerHeight;
  background-color: $defaultBgColor;
  font-size: .18rem;
  color: #fff;
}
</style>
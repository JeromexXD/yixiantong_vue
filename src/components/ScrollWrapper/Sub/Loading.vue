<template>
  <div class="loading" v-show="loadingShow">
    <img class="img" src="@/assets/images/loading.gif">
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    loadingShow: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

  .loading {
    @include flex-row;
    justify-content: center;
    align-items: center;
    height: 3rem;
    background-color: #ededed;
    
    .img {
      width: .5rem;
      height: .5rem;
    }
  }
</style>
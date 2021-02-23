<template>
  <div class="home-title">
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
  export default {
    name: 'HomeTitle',
    props: {
      title: String
    }
  }
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

  .home-title {
    @include flex-row;
    align-items: center;
    height: $headerHeight;
    margin-top: .1rem;
    padding: 0 .12rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;

    .title {
      font-size: .16rem;
    }
  }
</style>
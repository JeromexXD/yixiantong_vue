<template>
  <div class="back-wrad"
       @click="handleBack">
    <span class="iconfont icon-header-arrow-left"></span>
  </div>
</template>

<script>
  export default {
    name: 'BackWard',
    methods: {
      handleBack () {
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .back-wrad {
    position: absolute;
    top: 0;
    left: 0;
    width: .5rem;
    height: .5rem;
    text-align: center;
    line-height: .5rem;
  }
</style>
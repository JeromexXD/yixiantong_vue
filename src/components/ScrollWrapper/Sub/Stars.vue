<template>
  <span class="stars-wrap">
    <span :class="['iconfont icon-star', {active: starNum >= 1}]"></span>
    <span :class="['iconfont icon-star', {active: starNum >= 2}]"></span>
    <span :class="['iconfont icon-star', {active: starNum >= 3}]"></span>
    <span :class="['iconfont icon-star', {active: starNum >= 4}]"></span>
    <span :class="['iconfont icon-star', {active: starNum >= 5}]"></span>
  </span>
</template>

<script>
export default {
  name: 'Stars',
  props: {
    starNum: Number
  }
}
</script>

<style lang="scss" scoped>
@import 'styles/variables.scss';
  .stars-wrap {
    color: #ccc;
    
    .active {
      color: $starColor;
    }
  }
</style>
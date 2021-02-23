<template>
  <div class="icon-item"
       @click="handleIconClick(fieldInfo.field)">
      <div class="icon" :style="{backgroundColor: fieldInfo.bgColor}">
        <span :class="['iconfont', fieldInfo.icon]"></span>
      </div>
      <span class="text">{{ fieldInfo.iconText }}</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

  export default {
    name: 'CategoryIconSub',
    props: {
      fieldInfo: Object
    },
    methods: {
      ...mapMutations(['selectField']),
      handleIconClick (field) {
        this.selectField(field);
        this.$router.push('/list');
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';
  .icon-item {
    @include flex-column;
    flex: 1;
    justify-content: space-around;
    align-items: center;
    padding: .12rem .12rem;

    .icon {
      width: .4rem;
      height: .4rem;
      border-radius: .2rem;
      text-align: center;
      line-height: .4rem;

      .iconfont {
        font-size: .26rem;
        color: #fff;
      }
    }

    .text {
      font-size: .16rem;
    }
  }
</style>
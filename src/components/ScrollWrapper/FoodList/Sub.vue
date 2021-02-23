<template>
  <div class="food-sub">
    <router-link :to="{path: '/detail', query:{field: 'food', id: data.id}}">
      <div class="img-wrap">
      <img class="img" :src="data.img" />
      </div>
      <div class="info">
        <div class="name">{{ data.name }}</div>
        <p class="stars">
          <stars :starNum="Number(data.star)"></stars>
          <span class="price">￥{{ data.default_price }}/人</span>
        </p>
        <div class="keywords">
          <span class="kw"
                v-for="(item, index) of data.keyword"
                :key="index">{{ item }}</span>
        </div>
        <div class="others">
          <span class="item">{{ data.field }}</span>
          <span class="item">{{ data.area }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import stars from 'components/ScrollWrapper/Sub/Stars'

  export default {
    name: 'FoodListSub',
    props: {
      data: Object
    },
    components: {
      stars
    }
  }
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

  .food-sub {
    position: relative;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #ddd;

    .img-wrap {
      width: 1.2rem;
      height: 1.2rem;
      padding: .1rem;
      border-radius: .4rem;
      overflow: hidden;
      box-sizing: border-box;

      .img {
        width: 100%;
        height: 100%;
      }
    }

    .info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: .12rem .1rem .1rem 1.2rem;
      box-sizing: border-box;

      .name {
        @include ellipsis;
        font-size: .18rem;
      }

      .stars {
        @include flex-row;
        justify-content: space-between;
        align-items: center;
        height: .3rem;

        .price {
          font-size: .16rem;
        }

        >>>.iconfont {
          vertical-align: .05rem;
        }
      }
      
      .keywords {
        height: .3rem;
        font-size: .14rem;
        line-height: .3rem;
        overflow: hidden;

        .kw {
          margin-right: .05rem;
          padding: .02rem;
          color: rgb(190, 158, 77);
          background-color: rgb(251, 244, 228);
        }
      }

      .others {
        @include flex-row;
        justify-content: space-between;
        align-items: center;
        height: .3rem;
        font-size: .16rem;
      }
    }
  }
</style>
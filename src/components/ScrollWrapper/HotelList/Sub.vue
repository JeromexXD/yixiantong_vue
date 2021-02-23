<template>
  <div class="hotel-sub">
    <router-link :to="{path: '/detail', query: {field: 'hotel', id: data.id}}">
      <div class="img-wrap">
        <img class="img" :src="data.img" />
      </div>
      <div class="info">
        <div class="name">{{ data.name }}</div>
        <div class="score">{{ data.score }}分</div>
        <p class="area">{{ data.area }}</p>
        <div class="others">
          <span class="item price">￥{{ data.default_price }}起</span>
          <span class="item">{{ data.city_name }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'HotelListSub',
    props: {
      data: Object
    }
  }
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';
  .hotel-sub {
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
      padding: .1rem .1rem .1rem 1.2rem;
      box-sizing: border-box;

      .name {
        @include ellipsis;
        font-size: .18rem;
      }

      .score {
        height: .3rem;
        font-size: .16rem;
        line-height: .35rem;
        color: $starColor;
      }

      .area {
        @include ellipsis;
        height: .3rem;
        line-height: .3rem;
        font-size: .16rem;
        color: #989898;
      }

      .others {
        @include flex-row;
        justify-content: space-between;
        align-items: center;
        height: .3rem;
        font-size: .16rem;

        .price {
          color: $defaultGreen;
        }
      }
    }
  }
</style>
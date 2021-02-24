<template>
  <div class="massage-sub">
    <router-link :to="{path: '/detail', query: {field: 'massage', id: data.id}}">
      <div class="img-wrap">
        <img class="img" :src="data.img" />
      </div>
      <div class="info">
        <div class="name">{{ data.name }}</div>
        <p class="stars">
          <stars :starNum="Number(data.star)"></stars>
          <span class="score">{{ data.score }}分</span>
        </p>
        <div class="others">
          <span class="item">
            ￥<em>{{ data.default_price }}</em>起
          </span>
          <span class="item">{{ data.city_name }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import stars from 'components/ScrollWrapper/Sub/Stars'

  export default {
    name: 'MassageListSub',
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

  .massage-sub {
    position: relative;
    width: 100%;
    border-bottom: 1px solid #ddd;
    background-color: #fff;

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

      .stars {
        @include flex-row;
        justify-content: space-between;
        align-items: center;
        height: .5rem;
        margin-top: .1rem;
        font-size: .16rem;

        >>>.iconfont {
          vertical-align: .03rem;
        }

        .score {
          color: $starColor;
        }
      }

      .others {
        @include flex-row;
        justify-content: space-between;
        height: .3rem;
        line-height: .3rem;
        font-size: .16rem;

        em {
          font-size: .18rem;
          color: $defaultGreen;
        }
      }
    }
  }
</style>
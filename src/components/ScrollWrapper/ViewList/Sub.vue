<template>
  <div class="view-item">
    <router-link 
      :to="{
        path: '/detail', 
        query:{field: 'view', id: data.id}
      }">
      <div class="img-wrap">
        <img class="img" :src="data.img" />
      </div>
      <div class="info">
        <div class="name">{{ data.name }}</div>
        <p class="stars">
          <stars :starNum="Number(data.star)"></stars>
          <span class="score">{{ data.score }} 分</span>
        </p>
        <p class="others">
          <span class="item">
            <em>￥{{ data.default_price }}</em> 起
          </span>
          <span class="item">
            {{ data.city_name }}
          </span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from 'components/ScrollWrapper/Sub/Stars'
  export default {
    name: 'ViewListSub',
    props: {
      data: Object
    },
    components: {
      Stars
    }
  }
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';
  .view-item {
    width: 50%;
    padding: .1rem;
    box-sizing: border-box;

    .img-wrap {
      width: 100%;
      height: 1.1rem;
      border-radius: .06rem;
      overflow: hidden;

      .img {
        width: 100%;
        min-height: 1.1rem;
      }
    }

    .info {
      .name {
        @include ellipsis;
        height: .3rem;
        font-size: .16rem;
        line-height: .3rem;
      }

      .stars {
        @include flex-row;
        justify-content: space-between;
        align-items: center;
        height: .3rem;
        font-size: .14rem;

        .score {
          color: $starColor;
        }

        >>>.iconfont {
          vertical-align: .02rem;
        }
      }

      .others {
        @include flex-row;
        justify-content: space-between;
        align-items: center;
        height: .3rem;
        font-size: .14rem;

        em {
          color: $defaultGreen;
          font-size: .18rem;
        }
      }
    }
  }
</style>
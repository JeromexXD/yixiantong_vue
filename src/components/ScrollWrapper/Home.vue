<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <category-icons></category-icons>
      <home-title :title="homeTitles.viewTitle"></home-title>
      <view-list 
        :viewDatas="homeDatas.viewDatas">
      </view-list>
      <home-title :title="homeTitles.foodTitle"></home-title>
      <food-list
        :foodDatas="homeDatas.foodDatas"
        >
      </food-list>
      <home-title :title="homeTitles.hotelTitle"></home-title>
      <hotel-list
        :hotelDatas="homeDatas.hotelDatas">
      </hotel-list>
      <home-title :title="homeTitles.massageTitle"></home-title>
      <massage-list
        :massageDatas="homeDatas.massageDatas">
      </massage-list>
      <home-title :title="homeTitles.ktvTitle"></home-title>
      <ktv-list
        :ktvDatas="homeDatas.ktvDatas">
      </ktv-list>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import { IndexModel } from 'models/index'
import { mapState } from 'vuex'
import tools from 'utils/tools'

import CategoryIcons from './CategoryIcons/Index'
import HomeTitle from 'components/ScrollWrapper/Sub/HomeTitle'
import ViewList from './ViewList/Index'
import FoodList from './FoodList/Index'
import HotelList from './HotelList/Index'
import MassageList from './MassageList/Index'
import KtvList from './KtvList/Index'

  export default {
    name: 'HomeScrollWrapper',
    components: {
      CategoryIcons,
      HomeTitle,
      ViewList,
      FoodList,
      HotelList,
      MassageList,
      KtvList
    },
    data () {
      return {
        homeTitles: {
          viewTitle: '推荐景点',
          foodTitle: '推荐美食',
          hotelTitle: '推荐酒店',
          massageTitle: '推荐按摩',
          ktvTitle: '推荐KTV'
        },
        homeDatas: {
          foodDatas: [],
          hotelDatas: [],
          ktvDatas: [],
          massageDatas: [],
          viewDatas: []
        }
      }
    },
    computed: {
      ...mapState(['cityId'])
    },
    mounted () {
      this.scroll = new BetterScroll(this.$refs.wrapper);
      this.getHomeDatas(this.cityId);
    },
    methods: {
      getHomeDatas (cityId) {
        let indexModel = new IndexModel();

        indexModel.getHomeDatas(cityId)
          .then(res => {
            if (res && res.status === 0) {
              const data = res.data;


              this.homeDatas.foodDatas = tools.formatJSON(data.foodDatas, 'keyword');
              this.homeDatas.hotelDatas = data.hotelDatas;
              this.homeDatas.ktvDatas = data.ktvDatas;
              this.homeDatas.massageDatas = data.massageDatas;
              this.homeDatas.viewDatas = data.viewDatas;
            }
          })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
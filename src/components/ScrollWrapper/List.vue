<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <view-list
        v-if="field === 'view'"
        :viewDatas="listDatas[cityId]"
      >
      </view-list>
      <food-list
        v-if="field === 'food'"
        :foodDatas="listDatas[cityId]"
      >
      </food-list>
      <hotel-list
        v-if="field === 'hotel'"
        :hotelDatas="listDatas[cityId]"
      >
      </hotel-list>
      <massage-list
        v-if="field === 'massage'"
        :massageDatas="listDatas[cityId]"
      >
      </massage-list>
      <ktv-list
        v-if="field === 'ktv'"
        :ktvDatas="listDatas[cityId]"
      >
      </ktv-list>
      <loading :loadingShow="loadingShow"></loading>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import { mapState } from 'vuex'
import { ListModel } from 'models/list'
import tools from 'utils/tools'

import ViewList from 'components/ScrollWrapper/ViewList/Index'
import FoodList from 'components/ScrollWrapper/FoodList/Index'
import HotelList from 'components/ScrollWrapper/HotelList/Index'
import MassageList from 'components/ScrollWrapper/MassageList/Index'
import KtvList from 'components/ScrollWrapper/KtvList/Index'
import Loading from 'components/ScrollWrapper/Sub/Loading'



  export default {
    name: 'ListScrollWrapper',
    data () {
      return {
        listDatas: [],
        loadingShow: true
      }
    },
    watch: {
      cityId () {
        this.getListDatas(this.cityId, this.field);
      }
    },
    components: {
      ViewList,
      FoodList,
      HotelList,
      MassageList,
      KtvList,
      Loading
    },
    computed: {
      ...mapState(['cityId', 'field'])
    },
    mounted () {
      this.scroll = new BetterScroll(this.$refs.wrapper);
      this.getListDatas(this.cityId, this.field);
    },
    methods: {
      getListDatas (cityId, field) {
        if (!this.listDatas[cityId]) {
          const listModel = new ListModel();

          this.loadingShow = true;

          listModel.getListDatas(cityId, field)
            .then(res => {
              if (res && res.status === 0) {
                const data = tools.formatJSON(res.res, 'keyword');
                setTimeout(() => {
                  this.listDatas[cityId] = data;
                  this.loadingShow = false;
                }, 500)
              }
            })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
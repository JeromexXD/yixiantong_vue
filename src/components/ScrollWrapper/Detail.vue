<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!errShow">
        <swiper :picDatas="data.pics"></swiper>
        <view-detail 
          v-if="field === 'view'"
          :data="data">
        </view-detail>
        <food-detail
          v-if="field === 'food'"
          :data="data"
        ></food-detail>
        <hotel-detail
          v-if="field === 'hotel'"
          :data="data"
        ></hotel-detail>
        <massage-detail
          v-if="field === 'massage'"
          :data="data"
        ></massage-detail>
        <ktv-detail
          v-if="field === 'ktv'"
          :data="data"
        >
        </ktv-detail>
      </div>
      <error v-else></error>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import { DetailModel } from 'models/detail'
import tools from 'utils/tools'

import Swiper from 'components/ScrollWrapper/Sub/Swiper'
import ViewDetail from './Detail/View'
import FoodDetail from './Detail/Food'
import HotelDetail from './Detail/Hotel'
import MassageDetail from './Detail/Massage'
import KtvDetail from './Detail/Ktv'
import Error from 'components/ScrollWrapper/Sub/Error'

  export default {
    name: 'DetailScrollWrapper',
    components: {
      Swiper,
      ViewDetail,
      FoodDetail,
      HotelDetail,
      MassageDetail,
      KtvDetail,
      Error
    },
    data () {
      return {
        field: '',
        id: '',
        data: {},
        errShow: false
      }
    },
    mounted () {
      this.scroll = new BetterScroll(this.$refs.wrapper);
      this.field = this.$route.query.field;
      this.id = this.$route.query.id;
      this.getDetailDatas(this.field, this.id);
    },
    methods: {
      getDetailDatas (field, id) {
        const detailModel = new DetailModel();

        detailModel.getDetailDatas(field, id)
          .then(res => {
            if(res && res.status === 0) {
              const data = res.data;

              this.errShow = false;
              data.pics && (data.pics = tools.jsonToArr(data.pics));
              data.comment_keyword && (data.comment_keyword = tools.strToArr(data.comment_keyword));
              data.recom && (data.recom = tools.replaceToSpace(data.recom));
              data.service && (data.service = tools.jsonToArr(data.service));
              this.data = data;
            }
          })
          .catch (err => {
            console.log(err);
            this.errShow = true;
          }) 
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
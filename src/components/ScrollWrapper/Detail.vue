<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <swiper :picDatas="data.pics"></swiper>
      <view-detail 
        v-if="field === 'view'"
        :data="data">
      </view-detail>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import { DetailModel } from 'models/detail'
import tools from 'utils/tools'

import Swiper from 'components/ScrollWrapper/Sub/Swiper'
import ViewDetail from './Detail/View'

  export default {
    name: 'DetailScrollWrapper',
    components: {
      Swiper,
      ViewDetail
    },
    data () {
      return {
        field: '',
        id: '',
        data: {}
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
              const data = res.res;

              data.pics && (data.pics = tools.jsonToArr(data.pics));
              data.comment_keyword && (data.comment_keyword = tools.strToArr(data.comment_keyword));
              data.recom && (data.recom = tools.replaceToSpace(data.recom));
              data.service && (data.service = tools.jsonToArr(data.service));

              this.data = data;
            }
          })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
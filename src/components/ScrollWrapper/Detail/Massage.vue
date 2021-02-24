<template>
  <div class="massage-detail">
    <detail-name :name="data.name"></detail-name>
    <detail-stars :starNum="Number(data.star)"
                  :score="data.score">
    </detail-stars>
    <detail-address :address="data.address"></detail-address>
    <detail-price :price="data.default_price"></detail-price>
    <detail-comment-keyword :keyword="data.comment_keyword"></detail-comment-keyword>
    <detail-service 
      :parking="data.service.parking"
      :wifi="data.service.wifi"
    ></detail-service>
  </div>
</template>

<script>
import DetailName from './Sub/Name'
import DetailStars from './Sub/Stars'
import DetailAddress from './Sub/Address'
import DetailPrice from './Sub/Price'
import DetailCommentKeyword from './Sub/CommentKeyword'
import DetailService from './Sub/Service'

  export default {
    name: 'MassageDetail',
    props: {
      data: Object
    },
    components: {
      DetailName,
      DetailStars,
      DetailAddress,
      DetailPrice,
      DetailCommentKeyword,
      DetailService
    }
  }
</script>

<style>

</style>
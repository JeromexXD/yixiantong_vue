<template>
  <div class="food-detail">
    <detail-name :name="data.name"></detail-name>
    <detail-stars :starNum="Number(data.star)"
                  :score="data.score"></detail-stars>
    <detail-address :address="data.address"></detail-address>
    <detail-price :price="data.default_price"></detail-price>
    <detail-open-date-time :dateTime="data.open_datetime"></detail-open-date-time>
    <detail-recom :recom="data.recom"></detail-recom>
    <detail-comment-keyword :keyword="data.comment_keyword"></detail-comment-keyword>
  </div>
</template>

<script>
import DetailName from './Sub/Name'
import DetailStars from './Sub/Stars'
import DetailAddress from './Sub/Address'
import DetailPrice from './Sub/Price'
import DetailOpenDateTime from './Sub/OpenDateTime'
import DetailRecom from './Sub/Recom'
import DetailCommentKeyword from './Sub/CommentKeyword'

  export default {
    name: 'FoodDetail',
    props: {
      data: Object
    },
    components: {
      DetailName,
      DetailStars,
      DetailAddress,
      DetailPrice,
      DetailOpenDateTime,
      DetailRecom,
      DetailCommentKeyword
    }
  }
</script>

<style>

</style>
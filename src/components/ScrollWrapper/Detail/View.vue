<template>
  <div class="view-detail">
    <detail-name :name="data.name"></detail-name>
    <detail-stars :starNum="Number(data.star)"
                  :score="data.score"></detail-stars>
    <detail-address :address="data.address"></detail-address>
    <detail-price :price="data.default_price"></detail-price>
    <detail-open-date-time :dateTime="data.open_datetime"></detail-open-date-time>
    <detail-tip :tip="data.tip"></detail-tip>
    <detail-intro :intro="data.intro"></detail-intro>
    <detail-ticket-info :ticketInfo="data.ticket_info"></detail-ticket-info>
  </div>
</template>

<script>
import DetailName from './Sub/Name'
import DetailStars from './Sub/Stars'
import DetailAddress from './Sub/Address'
import DetailPrice from './Sub/Price'
import DetailOpenDateTime from './Sub/OpenDateTime'
import DetailTip from './Sub/Tip'
import DetailIntro from './Sub/Intro'
import DetailTicketInfo from './Sub/TicketInfo'

  export default {
    name: 'ViewDetail',
    props: {
      data: Object
    },
    components: {
      DetailName,
      DetailStars,
      DetailAddress,
      DetailPrice,
      DetailOpenDateTime,
      DetailTip,
      DetailIntro,
      DetailTicketInfo
    }
  }
</script>

<style>

</style>
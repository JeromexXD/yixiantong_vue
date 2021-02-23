<template>
  <div class="food-list">
    <food-list-sub v-for="item of foodDatas"
                   :key="item.id"
                   :data="item">
    </food-list-sub>
  </div>
</template>

<script>
import FoodListSub from './Sub'

  export default {
    name: 'FoodList',
    props: {
      foodDatas: Array
    },
    components: {
      FoodListSub
    }
  }
</script>

<style>

</style>
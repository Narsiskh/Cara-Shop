<script setup>
import {ref} from "vue";
import StarRating from "vue-star-rating";
import productData from "../data/data.json"

const product = ref(productData)
</script>

<template>
  <div class="section-p1">
    <div class="pro-container d-flex justify-content-between flex-wrap pt-20">
      <div class="pro position-relative">
        <img :src="product.img" alt="">
        <div class="des">
          <span>{{ product['brand'] }}</span>
          <h5>{{ product['name'] }}</h5>
          <div class="star">
            <star-rating   :increment="0.5"
                           :max-rating="5"
                           inactive-color="gray"
                           active-color="rgb(243, 181, 25)"
                           :star-size="15">
            </star-rating>
          </div>
          <h4>{{ product['price'] }}</h4>
        </div>
        <a href="#"><i class="bi bi-cart3 cart"></i></a>
      </div>
    </div>
  </div>

</template>

<style scoped lang="sass">

</style>
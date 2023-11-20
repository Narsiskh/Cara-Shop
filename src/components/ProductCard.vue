<script setup>
import StarRating from "vue-star-rating"

const {product} = defineProps(['product'])
</script>

<template>
  <div class="pro position-relative">
    <img src="../img/products/f1.jpg" alt="">
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
</template>

<style src="../assets/ProductCard.sass" scoped lang="sass"></style>
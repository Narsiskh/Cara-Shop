<script setup>
import products from "../data/data.json"
import {ref, onBeforeMount, computed} from "vue"
import {useRoute} from "vue-router";
import ProductCard from "@/components/ProductCard.vue";

const trendyProducts = computed(() => products.slice(8, 12))
const product = ref(null)
const route = useRoute()

const productId = parseInt(route.params.id.toString())

onBeforeMount(() => {
  product.value = products.find(item => item.id === parseInt(productId))
})
</script>

<template>
  <section id="pro-details" class="section-p1 d-flex">
    <div class="single-pro-image">
      <img src="../img/products/f1.jpg" id="MainImg" class="w-100" alt="">

      <div class="small-img-group d-flex justify-content-between">
        <div class="small-img-col">
          <img src="../img/products/f1.jpg" class="small-img w-100" alt="">
        </div>
        <div class="small-img-col">
          <img src="../img/products/f2.jpg" class="small-img w-100" alt="">
        </div>
        <div class="small-img-col">
          <img src="../img/products/f3.jpg" class="small-img w-100" alt="">
        </div>
        <div class="small-img-col">
          <img src="../img/products/f4.jpg" class="small-img w-100" alt="">
        </div>
      </div>

    </div>

    <div class="single-pro-details">
      <h6>{{product['type']}}</h6>
      <h4>{{product['name']}}</h4>
      <h2>{{product['price']}}</h2>
      <select class="d-block">
        <option>Select Size</option>
        <option>XL</option>
        <option>XXL</option>
        <option>Large</option>
        <option>Small</option>
      </select>
      <input type="number" value="1">
      <button class="normal">Add To Cart</button>
      <h4>Product Details</h4>
      <span>{{product['details']}}</span>
    </div>
  </section>

  <section class="products section-p1">
    <h2>Trendy Products</h2>
    <p>Summer Collection New Design</p>

    <div class="pro-container d-flex justify-content-between flex-wrap pt-20">
      <ProductCard
          v-for="item in trendyProducts"
          :key='item.id' :product="item"
          @click="$router.push(`/products/${item.id}`)"
      />
    </div>

  </section>
</template>

<style src="../assets/single-product.sass" scoped lang="sass"></style>
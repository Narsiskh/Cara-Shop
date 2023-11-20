<script setup>
import ProductCard from "@/components/ProductCard.vue"
import products from "../data/data.json"
import {ref} from "vue"

const allProducts = ref(products)
</script>

<template>
  <section id="page-header" class="shop-header d-flex flex-column justify-content-center w-100">
    <h2>#stayhome</h2>
    <p>Save more with coupons & up to 70% off!</p>
  </section>

  <section class="products section-p1">
    <div class="pro-container d-flex justify-content-between flex-wrap pt-20">
      <ProductCard
          v-for="item in allProducts"
          :key='item.id' :product="item"
          @click="$router.push(`/products/${item.id}`)"
      />
    </div>

  </section>

  <section id="pagination" class="section-p1">
    <a href="#">1</a>
    <a href="#">2</a>
    <a href="#"><i class="arrow bi bi-arrow-right"></i></a>
  </section>
</template>

<style src="../assets/shop.sass" scoped lang="sass"></style>
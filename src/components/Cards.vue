<script setup>
import {useRoute, RouterView} from "vue-router"
import {ref, onBeforeMount} from "vue"
import products from "../data/data.json"

const product = ref(null)
const route = useRoute()
const {id} = route.params

onBeforeMount(() => {
  product.value = products.find(p => p.id === parseInt(id))
})
</script>

<template>
  <section id="pro-details" class="section-p1 d-flex">
    <div class="single-pro-image">
      <img :src="product['img']" id="MainImg" class="w-100" alt="">

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

  <section id="product2" class="section-p1">
    <h2>Featured Products</h2>
    <p>Summer Collection New Design</p>

    <div class="pro-container d-flex justify-content-between flex-wrap pt-20">
      <div class="pro position-relative">
        <img src="../img/products/n1.jpg">
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="#"><i class="bi bi-cart3 cart"></i></a>
      </div>

      <div class="pro position-relative">
        <img src="../img/products/n2.jpg">
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="#"><i class="bi bi-cart3 cart"></i></a>
      </div>

      <div class="pro position-relative">
        <img src="../img/products/n3.jpg">
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="#"><i class="bi bi-cart3 cart"></i></a>
      </div>

      <div class="pro position-relative">
        <img src="../img/products/n4.jpg">
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="#"><i class="bi bi-cart3 cart"></i></a>
      </div>
    </div>
  </section>
  <RouterView />
</template>

<style src="../assets/cards.sass" scoped lang="sass"></style>
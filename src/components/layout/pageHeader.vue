<script setup>
import {RouterLink} from "vue-router"
</script>

<template>
  <section id="header" class="d-flex align-items-center justify-content-between position-sticky top-0 left-0">
    <a href="#"><img src="../../img/logo.png" class="logo" alt=""></a>
    <nav id="navbar" class="d-flex align-items-center justify-content-center m-0">
      <RouterLink active-class="active" to="/">Home</RouterLink>
      <RouterLink active-class="active" to="/shop">Shop</RouterLink>
      <RouterLink active-class="active" to="/blog">Blog</RouterLink>
      <RouterLink active-class="active" to="/about">About</RouterLink>
      <RouterLink active-class="active" to="/contact">Contact</RouterLink>
      <RouterLink active-class="active" to="/cart" id="lg-bag"><i class="bi bi-bag"></i></RouterLink>
      <RouterLink active-class="active" to="/" href="#" id="close" class="d-none"><i class="bi bi-x-lg"></i></RouterLink>
    </nav>
    <div id="mobile" class="d-none align-items-center">
      <a><i class="bi bi-bag"></i></a>
      <i id="bar" class="fas fa-outdent"></i>
    </div>
  </section>
</template>

<style src="../../assets/header.sass" scoped lang="sass"></style>
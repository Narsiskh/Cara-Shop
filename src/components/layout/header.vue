<script setup>
import {RouterLink} from "vue-router"
import {ref} from "vue"

const isMenuOpen = ref(false)

const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value
</script>

<template>
  <section id="header" class="d-flex align-items-center justify-content-between position-sticky top-0 left-0">
    <a href="#"><img src="../../img/logo.png" class="logo" alt=""></a>
    <nav id="navbar" :class="{ 'active': isMenuOpen }" class="d-flex align-items-center justify-content-center m-0">
      <RouterLink active-class="active" to="/">Home</RouterLink>
      <RouterLink active-class="active" to="/shop">Shop</RouterLink>
      <RouterLink active-class="active" to="/blog">Blog</RouterLink>
      <RouterLink active-class="active" to="/about">About</RouterLink>
      <RouterLink active-class="active" to="/contact">Contact</RouterLink>
      <RouterLink active-class="active" to="/cart"><i  id="lg-bag" class="bi bi-bag"></i></RouterLink>
      <RouterLink active-class="active" to="/" href="#" id="close" @click="toggleMenu"><i class="bi bi-x-lg"></i></RouterLink>
    </nav>
    <div id="mobile" class="d-none align-items-center">
      <a><i class="bi bi-bag bag"></i></a>
      <span class="d-flex align-items-end" @click="toggleMenu">
        <i  class="fas fa-outdent bar"></i>
      </span>
    </div>
  </section>
</template>

<style src="../../assets/header.sass" scoped lang="sass"></style>
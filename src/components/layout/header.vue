<script setup>

</script>

<template>
  <section id="header" class="d-flex align-items-center justify-content-between position-sticky top-0 left-0">
    <a href="#"><img src="../../img/logo.png" class="logo" alt=""></a>

    <ul id="navbar" class="d-flex align-items-center justify-content-center m-0">
      <li><a  class="active" href="../../../index.html">Home</a></li>
      <li><a href="shop.html">Shop</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li id="lg-bag"><a href="cart.html"><i class="bi bi-bag"></i></a></li>
      <a href="#" id="close"><i class="bi bi-x-lg"></i></a>
    </ul>
    <div id="mobile" class="d-none align-items-center">
      <a href="cart.html"><i class="bi bi-bag"></i></a>
      <i id="bar" class="fas fa-outdent"></i>
    </div>
  </section>
</template>

<style src="../../assets/headerStyle.sass" scoped lang="sass"></style>
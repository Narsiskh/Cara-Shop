<script setup></script>

<template>
  <section id="header" class="d-flex align-items-center justify-content-between position-sticky top-0 left-0">
    <a href="#"><img src="../../img/logo.png" class="logo" alt=""></a>
    <nav id="navbar" class="d-flex align-items-center justify-content-center m-0">
      <a class="active">Home</a>
      <a>Shop</a>
      <a>Blog</a>
      <a>About</a>
      <a>Contact</a>
      <a id="lg-bag"><i class="bi bi-bag"></i></a>
      <a href="#" id="close" class="d-none"><i class="bi bi-x-lg"></i></a>
    </nav>
    <div id="mobile" class="d-none align-items-center">
      <a><i class="bi bi-bag"></i></a>
      <i id="bar" class="fas fa-outdent"></i>
    </div>
  </section>
</template>

<style src="../../assets/header.sass" scoped lang="sass"></style>
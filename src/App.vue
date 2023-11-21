<script setup>
import {RouterView} from "vue-router"
import Header from "@/components/layout/header.vue"
import Footer from "@/components/layout/footer.vue"
</script>

<template>
  <main>
    <Header />
    <RouterView />
    <Footer />
  </main>
</template>

<style src="./assets/app.sass" lang="sass"></style>

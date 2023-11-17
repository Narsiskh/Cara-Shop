<script setup>
import {RouterView} from "vue-router"
import Header from "@/components/layout/pageHeader.vue"
import Footer from "@/components/layout/pageFooter.vue"
</script>

<template>
  <main>
    <Header />
    <RouterView />
    <Footer />
  </main>
</template>

<style src="./assets/app.sass" lang="sass"></style>

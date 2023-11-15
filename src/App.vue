<script setup>
import {RouterView} from "vue-router"
import Header from "@/components/layout/header.vue";
</script>

<template>
  <main>
    <Header/>
    <RouterView/>
  </main>
</template>

<style src="./assets/app.sass" scoped lang="sass"></style>

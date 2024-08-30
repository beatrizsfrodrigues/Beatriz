<script setup>
import { RouterLink, RouterView } from "vue-router";
import Home from "./views/HomeView.vue";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Nav />
  <router-view />
  <Footer />
</template>
<style>
/* @import "./css/base.css"; */
</style>

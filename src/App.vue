<script setup>
import { RouterLink, RouterView } from "vue-router";
import Home from "./views/HomeView.vue";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";
</script>

<template>
  <Nav />
  <!-- <FontAwesomeIcon :icon="byPrefixAndName.fas['house']" />SS -->
  <router-view />
  <Footer />
</template>
<style>
/* @import "./css/base.css"; */
</style>

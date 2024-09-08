<template>
  <div v-if="isMobile">
    <div class="horizontal" id="navMobile">
      <router-link
        to="/"
        v-bind:class="{ active: isActive }"
        v-on:click="closeMenu"
        class="logo"
        ><p>Beatriz</p></router-link
      >
      <button
        class="btnMenu"
        v-bind:class="{ active: isActive }"
        v-on:click="openMenu"
      >
        <img
          src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725544041/portfolio/menu_fy6rfg.svg"
          alt=""
        />
      </button>
    </div>
    <div id="navContent">
      <button
        class="btnClose"
        v-bind:class="{ active: isActive }"
        v-on:click="closeMenu"
      >
        <img
          src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725563326/portfolio/Close_dark_tsawgu.svg"
          alt=""
        />
      </button>
      <div class="navLinks2">
        <router-link
          to="/projects"
          class="navLink"
          v-bind:class="{ active: isActive }"
          v-on:click="closeMenu"
          >Projects</router-link
        >
        <img
          src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725545888/portfolio/line_vnqx1r.svg"
          alt=""
          class="line"
        />
        <router-link
          to="/about"
          class="navLink"
          v-bind:class="{ active: isActive }"
          v-on:click="closeMenu"
          >About me</router-link
        >
        <img
          src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725545888/portfolio/line_vnqx1r.svg"
          alt=""
          class="line"
        />
        <router-link
          to="/contacts"
          class="navLink"
          v-bind:class="{ active: isActive }"
          v-on:click="closeMenu"
          >Contacts</router-link
        >
      </div>

      <div class="socialMediaNav">
        <a href="https://github.com/beatrizsfrodrigues" target="_blank"
          ><img
            src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725563432/portfolio/github_dark_esbgj6.svg"
            alt="github"
        /></a>
        <a
          href="https://www.linkedin.com/in/beatriz-rodrigues-aa5ba613a/"
          target="_blank"
          ><img
            src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725563433/portfolio/linkedin_dark_der1sz.svg"
            alt="linkedin"
        /></a>
        <a href="https://www.behance.net/beatrizsfrodrigues" target="_blank"
          ><img
            src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725563433/portfolio/behance_dark_vkd6zu.svg"
            alt="behance"
        /></a>
      </div>
    </div>
  </div>
  <div v-else id="nav" class="horizontal">
    <router-link to="/" class="logo"><p>Beatriz</p></router-link>

    <div class="horizontal" id="navLinks">
      <router-link to="/projects" class="navLink"><p>Projects</p></router-link>
      <router-link to="/about" class="navLink"><p>About me</p></router-link>
      <router-link to="/contacts" class="navLink"><p>Contacts</p></router-link>
    </div>
  </div>
</template>

<script>
import { useMediaQuery } from "@vueuse/core";

export default {
  setup() {
    const isMobile = useMediaQuery("(max-width: 600px)");
    return { isMobile };
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    openMenu() {
      this.isActive = true;
      document.getElementById("navContent").style.right = "0";
    },

    closeMenu() {
      this.isActive = false;
      document.getElementById("navContent").style.right = "-100%";
    },
  },
};
</script>

<style lang="scss" scoped></style>

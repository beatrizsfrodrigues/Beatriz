<template>
  <div class="mainBody" id="homeBody">
    <!-- <p id="note1" class="notes">look around!</p> -->
    <p id="note2" class="notes">that's me :)</p>
    <div class="horizontal" id="centerInfo">
      <div class="profileContainer">
        <img
          src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725463840/portfolio/pfp_qy9gnr.png"
          alt="Profile Picture"
          id="pfp"
        />
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <div id="myInfo">
        <div>
          <h1 id="titleName">Beatriz Rodrigues</h1>
          <p class="redacted">rgbrzsvdsfdfeamvmsodmv</p>
        </div>
        <div>
          <div class="horizontal jobs">
            <img
              src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725463840/portfolio/asterisk1_a5nuig.svg"
              alt="projectImg"
            />
            <p>UI designer</p>
            <img
              src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725463849/portfolio/glow_mzzhma.svg"
              alt="projectImg"
            />
          </div>
          <div class="horizontal jobs">
            <img
              src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725463843/portfolio/asterisk2_wb7b3y.svg"
              alt="projectImg"
            />
            <p>Web developer</p>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top: 100px">
      <div class="projectsArrow">
        <p id="note3" class="notes">my projects</p>
        <img
          src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725466845/portfolio/arrow1_svribz.svg"
          alt="arrow"
          id="arrow1"
        />
      </div>
      <router-link to="/projects">
        <div id="projectsPics">
          <img
            class="projectsPics"
            src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725376084/portfolio/tw1_foc8sj.png"
            alt=""
          />
          <img
            class="projectsPics"
            src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725382710/portfolio/em1_nvwczp.png"
            alt=""
          />
          <img
            class="projectsPics"
            src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725375980/portfolio/evergreen3_ssldrj.png"
            alt=""
          />
        </div>
      </router-link>
    </div>
    <div v-if="!isTablet && !isMobile" style="margin-top: -120px">
      <div class="socialArrow">
        <p id="note4" class="notes">follow me!</p>
        <img
          src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725466846/portfolio/arrow2_km6zvg.svg"
          alt="arrow"
          id="arrow2"
        />
      </div>
      <div id="social">
        <a href="https://github.com/beatrizsfrodrigues" target="_blank">
          <!-- <font-awesome-icon icon="github" /> -->
          <img
            src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725463848/portfolio/github_dbapkc.svg"
            alt="github"
            class="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/beatriz-rodrigues-aa5ba613a/"
          target="_blank"
          ><img
            src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725463839/portfolio/linkedin_zmc9ak.svg"
            alt="linkedin"
            class="linkedin"
        /></a>
        <a href="https://www.behance.net/beatrizsfrodrigues" target="_blank"
          ><img
            src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725463846/portfolio/behance_byor2q.svg"
            alt="behance"
            class="behance"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import { useMediaQuery } from "@vueuse/core";

export default {
  setup() {
    const isMobile = useMediaQuery("(max-width: 600px)");
    const isTablet = useMediaQuery("(max-width: 1000px)");
    return { isMobile, isTablet };
  },
};
</script>

<style>
@import "../css/home.css";
</style>

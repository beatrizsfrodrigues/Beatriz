<template>
  <div class="mainBody">
    <div class="horizontal">
      <h1>My Projects</h1>
      <!-- <img id="filterIcon" src="../images/filter.svg" alt="" /> -->
    </div>

    <div v-for="project in this.projects">
      <div v-if="project.id % 2 == 0" class="card horizontal cardL">
        <div style="position: relative">
          <img
            src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725466853/portfolio/highlight3_xbs3o4.svg"
            alt=""
            class="high1"
          />
          <div class="imgDiv">
            <img
              v-for="img in project.photos"
              :src="img"
              alt=""
              class="projectsImg groupL"
            />
          </div>
        </div>

        <div class="infoL">
          <div style="position: relative">
            <img
              src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725466848/portfolio/highlight1_k5wxzr.svg"
              alt=""
              class="high2"
            />
            <h3>{{ project.name }}</h3>
          </div>
          <p v-if="!isMobile" class="description">
            {{ truncateText(project.description, 300) }}
          </p>

          <div class="horizontal filtersP">
            <ul v-for="filter in this.filters">
              <li v-if="project.filter.includes(filter.id)" class="filterP">
                {{ filter.name }}
              </li>
            </ul>
          </div>
          <router-link
            :to="{
              name: 'project',
              params: {
                id: project.id,
              },
            }"
            class="linkP"
            >See more</router-link
          >
        </div>
      </div>

      <div v-else class="card horizontal cardR">
        <div class="infoR">
          <div style="position: relative" class="horizontal">
            <!-- <img
              src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725466847/portfolio/arrow3_pomugo.svg"
              alt=""
              class="high3"
            /> -->

            <h3 style="width: 100%">{{ project.name }}</h3>
          </div>
          <p v-if="!isMobile" class="description" style="margin-top: 0">
            {{ truncateText(project.description, 300) }}
          </p>

          <div class="horizontal filtersP">
            <ul v-for="filter in this.filters">
              <li v-if="project.filter.includes(filter.id)" class="filterP">
                {{ filter.name }}
              </li>
            </ul>
          </div>
          <router-link
            :to="{
              name: 'project',
              params: {
                id: project.id,
              },
            }"
            class="linkP"
            >See more</router-link
          >
        </div>
        <div style="position: relative">
          <img
            src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725466851/portfolio/highlight2_dejoyj.svg"
            alt=""
            class="high4"
          />
          <div class="imgDiv imgGroupR">
            <img
              v-for="img in project.photos"
              :src="img"
              alt=""
              class="projectsImg groupR"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProjectStore } from "@/stores/Project";
import { useFilterStore } from "@/stores/Filter"; // Corrected import
import { useMediaQuery } from "@vueuse/core";
export default {
  setup() {
    const isMobile = useMediaQuery("(max-width: 600px)");

    const projectStore = useProjectStore();
    const filterStore = useFilterStore();

    const truncateText = (text, maxLength) => {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
      }
      return text;
    };

    return { projectStore, filterStore, truncateText, isMobile };
  },

  data() {
    return {
      projects: [],
      filters: [],
    };
  },

  async created() {
    if (this.projects == undefined || this.projects == "") {
      this.projects = this.projectStore.getProjects;
    }

    if (this.filters == undefined || this.filters == "") {
      this.filters = this.filterStore.getFilters;
    }
  },

  computed: {
    truncatedDescription() {
      return this.truncateText(this.description, 10); // Adjust maxLength as needed
    },
  },
  methods: {
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
      }
      return text;
    },
  },
};
</script>

<style>
@import "../css/projects.css";
</style>

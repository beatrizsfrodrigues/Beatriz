<template>
  <div class="mainBody">
    <div class="horizontal">
      <h1>My Projects</h1>
      <img id="filterIcon" src="../images/filter.svg" alt="" />
    </div>

    <div v-for="project in this.projects">
      <div v-if="project.id % 2 == 0" class="card horizontal cardL">
        <div class="imgDiv">
          <img
            v-for="img in project.photos"
            :src="img"
            alt=""
            class="projectsImg groupL"
          />
        </div>

        <div class="infoL">
          <h3>{{ project.name }}</h3>
          <p class="description">{{ project.description }}</p>
          <div class="horizontal filtersP">
            <div v-for="filter in this.filters">
              <div v-for="f in project.filter">
                <p v-if="f == filter.id" class="filterP">
                  {{ filter.name }}
                </p>
              </div>
            </div>
          </div>
          <router-link
            :to="{
              name: 'project',
              params: {
                id: project.id,
              },
            }"
            ><button class="btnCard">Learn more</button></router-link
          >
        </div>
      </div>

      <div v-else class="card horizontal cardR">
        <div class="infoR">
          <h3>{{ project.name }}</h3>
          <p class="description">{{ project.description }}</p>
          <div class="horizontal filtersP">
            <div v-for="filter in this.filters">
              <div v-for="f in project.filter">
                <p v-if="f == filter.id" class="filterP">
                  {{ filter.name }}
                </p>
              </div>
            </div>
          </div>
          <router-link
            :to="{
              name: 'project',
              params: {
                id: project.id,
              },
            }"
            ><button class="btnCard">Learn more</button></router-link
          >
        </div>
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
</template>

<script>
import { useProjectStore } from "@/stores/Project";
import { useFilterStore } from "@/stores/Filter"; // Corrected import
export default {
  setup() {
    const projectStore = useProjectStore();
    const filterStore = useFilterStore();

    return { projectStore, filterStore };
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
};
</script>

<style>
@import "../css/projects.css";
</style>

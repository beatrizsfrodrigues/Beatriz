<template>
  <div class="mainBody">
    <h1>{{ project.name }}</h1>
    <div class="horizontal">
      <!-- <img :src="project.photo" alt="" class="imgProject" /> -->
      <video controls autoplay class="videoTour">
        <source :src="project.video_tour" type="video/mp4" />
      </video>
      <div>
        <p>{{ this.project.description }}</p>
      </div>
    </div>
    <p>{{ this.project }}</p>
    <button>Github Pages</button>
  </div>
</template>

<script>
import { useProjectStore } from "@/stores/Project";
export default {
  setup() {
    const projectStore = useProjectStore();

    return { projectStore };
  },

  data() {
    return {
      projects: [],
      project: {},
    };
  },

  async created() {
    if (this.projects == undefined || this.projects == "") {
      this.projects = this.projectStore.getProjects;
    }

    this.project = this.projects.find(
      (project) => project.id == this.$route.params.id
    );

    console.log(this.project.photo);
  },
};
</script>

<style>
@import "../css/project.css";
</style>

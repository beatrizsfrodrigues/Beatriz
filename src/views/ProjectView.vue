<template>
  <div class="mainBody">
    <h1>{{ project.name }}</h1>
    <div class="horizontal pDiv1">
      <!-- <img :src="project.photo" alt="" class="imgProject" /> -->
      <video autoplay muted loop class="videoTour">
        <source :src="project.video_tour" type="video/mp4" />
      </video>
      <div class="pInfo">
        <p>{{ project.description }}</p>

        <ul v-for="skill in this.skills">
          <div v-for="s in project.skills">
            <li v-if="s == skill.id">
              {{ skill.name }}
            </li>
          </div>
        </ul>
      </div>
    </div>
    <h2>Project Photos</h2>
    <div class="pPhotos">
      <img
        v-for="img in project.photos"
        :src="img"
        alt=""
        class="projectsImgP"
      />
    </div>
    <div v-if="project.video_promotional && project.poster">
      <h2>Promotional Video and Poster</h2>
      <div class="horizontal videoPoster">
        <video controls class="videoPromo">
          <source :src="project.video_promotional" type="video/mp4" />
        </video>
        <img class="poster" :src="project.poster" alt="" />
      </div>
      <!-- <p>{{ this.project }}</p> -->
    </div>

    <div v-if="project.poster && !project.video_promotional">
      <h2>Poster</h2>
      <div class="posterDiv">
        <img class="poster" :src="project.poster" alt="" />
      </div>
    </div>
    <h3 style="text-align: center; margin-top: 56px">Project Links</h3>
    <button
      class="btn"
      v-if="project.githubPages"
      @click="goToGithubPages"
      style="margin-top: 24px"
    >
      Github Pages
    </button>
    <div class="horizontal" id="linksProj">
      <a v-if="project.figma" :href="project.figma" class="linkOut">Figma</a>
      <a v-if="project.github" :href="project.github" class="linkOut">Github</a>
      <a v-if="project.github2" :href="project.github2" class="linkOut"
        >Github for Backend</a
      >
    </div>
  </div>
</template>

<script>
import { useProjectStore } from "@/stores/Project";
import { useSkillStore } from "@/stores/Skill";
export default {
  setup() {
    const projectStore = useProjectStore();
    const skillStore = useSkillStore();

    return { projectStore, skillStore };
  },

  data() {
    return {
      projects: [],
      project: {},
      skills: [],
    };
  },

  async created() {
    if (this.projects == undefined || this.projects == "") {
      this.projects = this.projectStore.getProjects;
    }

    if (this.skills == undefined || this.skills == "") {
      this.skills = this.skillStore.getSkills;
    }

    this.project = this.projects.find(
      (project) => project.id == this.$route.params.id,
    );

    console.log(this.project.photo);
  },
  methods: {
    goToGithubPages() {
      window.open(this.project.githubPages, "_blank");
    },
  },
};
</script>

<style>
@import "../css/project.css";
</style>

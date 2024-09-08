import "./css/base.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import json from "./data.json";
import { useProjectStore } from "@/stores/Project";
import { useFilterStore } from "@/stores/Filter";
import { useSkillStore } from "@/stores/Skill";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

localStorage.clear();

const projectStore = useProjectStore();
const filterStore = useFilterStore();
const skillStore = useSkillStore();

let projects = json.projects;

let filters = json.filters;

let skills = json.skills;

let project = projectStore.getProjects;
projects.forEach((prj) => {
  if (project.find((p) => p.id == prj.id)) {
    console.log("project added");
  } else {
    projectStore.addProject(prj);
  }
});

let filter = filterStore.getFilters;
filters.forEach((fl) => {
  if (filter.find((f) => f.id == fl.id)) {
    console.log("filter added");
  } else {
    filterStore.addFilter(fl);
  }
});

let skill = skillStore.getSkills;
skills.forEach((sk) => {
  if (skill.find((s) => s.id == sk.id)) {
    console.log("skill added");
  } else {
    skillStore.addSkill(sk);
  }
});

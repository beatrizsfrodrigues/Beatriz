import { defineStore } from "pinia";
import { useLocalStorage, useSessionStorage, useStorage } from "@vueuse/core";

export const useSkillStore = defineStore("skill", {
  state: () => ({
    skills: useStorage("skills", []),
  }),
  getters: {
    getSkills() {
      return this.skills;
    },
  },
  actions: {
    addSkill(skill) {
      this.skills.push(skill);
    },
  },
});

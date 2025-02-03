<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);

const links = [
  { icon: "lucide:house", label: "home.label", to: "/" },
  { icon: "lucide:user", label: "about.label", to: "/about" },
  { icon: "lucide:lightbulb", label: "skills.label", to: "/skills" },
  { icon: "lucide:graduation-cap", label: "education.label", to: "/education" },
  { icon: "lucide:folder-git-2", label: "projects.label", to: "/projects" },
  { icon: "lucide:mail", label: "contact.label", to: "/contact" },
];
</script>

<template>
  <Dock
    :magnification="breakpoints.isGreaterOrEqual('md') ? 30 : 0"
    :distance="breakpoints.isGreaterOrEqual('md') ? 60 : 0"
    direction="bottom"
    class="*:*:size-2/3"
  >
    <DockIcon v-for="link in links" :key="link.label" :to="link.to" :icon="link.icon" :label="link.label" />
  </Dock>
</template>

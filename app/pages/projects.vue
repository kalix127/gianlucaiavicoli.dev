<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t("seo.projects.title"),
  ogTitle: t("seo.projects.title"),
  description: t("seo.projects.description"),
  ogDescription: t("seo.projects.description"),
});
</script>

<template>
  <div class="grid h-full place-items-center">
    Projects
  </div>
</template>

<style scoped>

</style>

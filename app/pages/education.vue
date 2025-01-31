<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t("seo.education.title"),
  ogTitle: t("seo.education.title"),
  description: t("seo.education.description"),
  ogDescription: t("seo.education.description"),
});
</script>

<template>
  <div class="grid h-full place-items-center">
    Education
  </div>
</template>

<style scoped>

</style>

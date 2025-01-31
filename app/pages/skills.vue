<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t("seo.skills.title"),
  ogTitle: t("seo.skills.title"),
  description: t("seo.skills.description"),
  ogDescription: t("seo.skills.description"),
});
</script>

<template>
  <div class="grid h-full place-items-center">
    Skills
  </div>
</template>

<style scoped>

</style>

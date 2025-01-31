<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t("seo.about.title"),
  ogTitle: t("seo.about.title"),
  description: t("seo.about.description"),
  ogDescription: t("seo.about.description"),
});
</script>

<template>
  <div class="grid h-full place-items-center">
    About
  </div>
</template>

<style scoped>

</style>

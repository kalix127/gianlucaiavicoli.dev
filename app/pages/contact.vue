<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t("seo.contact.title"),
  ogTitle: t("seo.contact.title"),
  description: t("seo.contact.description"),
  ogDescription: t("seo.contact.description"),
});
</script>

<template>
  <div class="grid h-full place-items-center">
    Contact
  </div>
</template>

<style scoped>

</style>

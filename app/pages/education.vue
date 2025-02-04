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
  <div class="grid h-full place-items-center space-y-8">
    <div class="space-y-8">
      <!-- Title -->
      <h1 class="text-2xl font-bold sm:text-3xl md:text-4xl">
        {{ $t("education.title") }}
      </h1>

      <!-- Paths -->
      <EducationStepper />
    </div>
  </div>
</template>

<style scoped>

</style>

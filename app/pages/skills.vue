<script setup lang="ts">
const { skills } = useAppConfig();
const { t } = useI18n();

useSeoMeta({
  title: t("seo.skills.title"),
  ogTitle: t("seo.skills.title"),
  description: t("seo.skills.description"),
  ogDescription: t("seo.skills.description"),
});
</script>

<template>
  <div class="grid h-full place-items-center space-y-8">
    <div class="space-y-8">
      <!-- Title -->
      <h1 class="text-2xl font-bold sm:text-3xl md:text-4xl">
        {{ $t("skills.title") }}
      </h1>
      <!-- Description -->
      <p class="!mt-2 text-muted-foreground">
        {{ $t("skills.description") }}
      </p>

      <!-- Languages -->
      <SkillsCategory :title="$t('skills.programming_languages')" :items="skills.languages" />

      <!-- Frameworks -->
      <SkillsCategory :title="$t('skills.frameworks')" :items="skills.frameworks" />

      <!-- Tools -->
      <SkillsCategory :title="$t('skills.tools')" :items="skills.tools" />
    </div>
  </div>
</template>

<style scoped>

</style>

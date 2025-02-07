<script setup lang="ts">
const { t } = useI18n();

const { personal, contributions } = useAppConfig().projects;

useSeoMeta({
  title: t("seo.projects.title"),
  ogTitle: t("seo.projects.title"),
  description: t("seo.projects.description"),
  ogDescription: t("seo.projects.description"),
});
</script>

<template>
  <div class="grid h-full place-items-center space-y-8">
    <div class="space-y-8">
      <!-- Title -->
      <h1 class="text-2xl font-bold sm:text-3xl md:text-4xl">
        {{ $t("projects.label") }}
      </h1>
      <!-- Description -->
      <p class="!mt-2 text-muted-foreground">
        {{ $t("projects.description") }}
      </p>

      <!-- Personal Projects -->
      <ProjectCategory :title="$t('projects.personal_title')">
        <ProjectCard
          v-for="project in personal"
          :key="project.title"
          :project="project"
        />
      </ProjectCategory>

      <!-- Contributions -->
      <ProjectCategory :title="$t('projects.contributions_title')">
        <ProjectCard
          v-for="project in contributions"
          :key="project.title"
          :project="project"
        />
      </ProjectCategory>
    </div>
  </div>
</template>

<style scoped>

</style>

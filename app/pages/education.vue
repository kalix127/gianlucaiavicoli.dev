<script setup lang="ts">
const { t } = useI18n();
const { certifications } = useAppConfig();

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

      <!-- Certifications -->
      <h2 class="text-center text-lg font-bold sm:text-xl md:text-left md:text-2xl">
        {{ $t("education.certifications.title") }}
      </h2>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CardSpotlight v-for="certification in certifications" :key="certification.title">
          <div class="flex items-center gap-4">
            <Icon :name="`logo:${certification.icon}`" size="28" />
            <div class="space-y-1">
              <h3 class="text-lg font-semibold">
                {{ certification.title }}
              </h3>
              <span class="text-sm text-muted-foreground">{{ certification.issuer }}</span>
            </div>
          </div>

          <NuxtLink :to="certification.url" target="_blank">
            <Button variant="outline" size="sm" target="_blank" class="mt-4">
              {{ $t("education.certifications.verify_certification") }}
              <Icon name="lucide:external-link" size="16" />
            </Button>
          </NuxtLink>
        </CardSpotlight>
      </div>
    </div>
  </div>
</template>

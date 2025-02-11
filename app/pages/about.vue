<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t("seo.about.title"),
  ogTitle: t("seo.about.title"),
  description: t("seo.about.description"),
  ogDescription: t("seo.about.description"),
});

const items = computed(() => [
  {
    icon: "material-symbols:translate",
    title: t("language.label"),
    value: `${t("language.it")} - ${t("language.en")}`,
  },
  {
    icon: "lucide:earth",
    title: t("nationality.label"),
    value: t("nationality.it"),
  },
  {
    icon: "lucide:dna",
    title: t("gender.label"),
    value: t("gender.male"),
  },
]);

const hobbies = computed(() => [
  {
    label: t("hobbies.reading"),
  },
  {
    label: t("hobbies.studying"),
  },
  {
    label: t("hobbies.coding"),
  },
  {
    label: t("hobbies.linux"),
  },
  {
    label: t("hobbies.traveling"),
  },
  {
    label: t("hobbies.opensource"),
  },
  {
    label: t("hobbies.gaming"),
  },
]);
</script>

<template>
  <div class="grid h-full place-items-center space-y-8">
    <div class="space-y-8">
      <!-- Title -->
      <h1 class="text-2xl font-bold sm:text-3xl md:text-4xl">
        {{ $t("about.title") }}
      </h1>
      <!-- Subtitle -->
      <h2 class="!mt-4 text-lg font-bold sm:text-xl md:text-2xl">
        {{ $t("about.subtitle") }}
      </h2>
      <!-- Description -->
      <p class="!mt-2 text-muted-foreground">
        {{ $t("about.description") }}
      </p>
      <!-- Factos -->
      <div class="grid w-full grid-cols-1 place-items-center gap-4 xs:grid-cols-2 xs:place-items-start md:grid-cols-3">
        <div v-for="item in items" :key="item.title" class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <Icon :name="item.icon" size="30" />
            <h2 class="text-lg font-bold">
              {{ item.title }}
            </h2>
          </div>
          <div class="flex justify-center gap-2 xs:justify-start">
            <Badge variant="outline" class="md:text-sm">
              {{ item.value }}
            </Badge>
          </div>
        </div>
      </div>
      <!-- Hobbies -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Icon name="ion:sparkles" size="30" />
          <h2 class="text-lg font-bold">
            {{ $t("hobbies.label") }}
          </h2>
        </div>
        <div class="flex flex-wrap gap-2">
          <div v-for="hobby in hobbies" :key="hobby.label" class="flex justify-center gap-2">
            <Badge variant="outline" class="md:text-sm">
              {{ hobby.label }}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

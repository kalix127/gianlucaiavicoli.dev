<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t("seo.about.title"),
  ogTitle: t("seo.about.title"),
  description: t("seo.about.description"),
  ogDescription: t("seo.about.description"),
});

const totalContributions = ref(0);

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
  {
    icon: "lucide:github",
    title: t("github.total_contributions"),
    value: totalContributions.value,
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

interface Contribution {
  color: string;
  contributionCount: number;
  contributionLevel: string;
  date: string;
}

interface GithubContributions {
  contributions: Contribution[][];
  totalContributions: number;
}

async function fetchGithubContributions() {
  try {
    const url = "https://github-contributions-api.deno.dev/kalix127.json";
    const response = await $fetch<GithubContributions>(url);
    totalContributions.value = response.totalContributions;
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
  }
}

onMounted(() => {
  fetchGithubContributions();
});
</script>

<template>
  <div class="grid h-full place-items-center space-y-8">
    <div class="space-y-8">
      <!-- Title -->
      <h1 class="text-xl font-bold md:text-4xl">
        {{ $t("about.title") }}
      </h1>
      <!-- Subtitle -->
      <h2 class="!mt-4 text-lg font-bold md:text-2xl">
        {{ $t("about.subtitle") }}
      </h2>
      <!-- Description -->
      <p class="!mt-2 text-muted-foreground md:text-lg">
        {{ $t("about.description") }}
      </p>
      <!-- Factos -->
      <div class="grid w-full grid-cols-1 place-items-center gap-4 xs:grid-cols-2 md:grid-cols-4">
        <div v-for="item in items" :key="item.title" class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <Icon :name="item.icon" size="30" />
            <h2 class="text-lg font-bold">
              {{ item.title }}
            </h2>
          </div>
          <div class="flex justify-center gap-2">
            <Badge variant="outline">
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
            <Badge variant="outline">
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

<script setup lang="ts">
const { themeClass, radius } = useThemes();
const { site, projects } = useAppConfig();

useSeoMeta({
  ogImage: site?.ogImage,
});
useServerHead({
  bodyAttrs: {
    class: themeClass.value,
    style: `--radius: ${radius.value}rem;`,
  },
});

const githubStars = ref<Record<string, number>>({});

for (const project of projects.contributions) {
  const { data } = await useFetch<number>(
    `https://api.github.com/repos/${project.github}`,
    {
      headers: {
        "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      transform: (data: any) => data.stargazers_count as number,
    },
  );

  if (data.value) {
    githubStars.value[project.title] = data.value;
  }
}

provide("githubStars", githubStars);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

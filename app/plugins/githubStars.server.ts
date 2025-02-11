export default defineNuxtPlugin(async (nuxtApp) => {
  const { projects } = useAppConfig();

  const githubStars = ref<Record<string, number>>({});

  for (const project of projects.contributions) {
    try {
      const json = await $fetch<{ stargazers_count: number }>(
        `https://api.github.com/repos/${project.github}`,
        {
          headers: {
            "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
            "Content-Type": "application/json",
          },
        },
      );
      githubStars.value[project.title] = json.stargazers_count ?? 0;
    } catch {
      githubStars.value[project.title] = 0;
    }
  }

  nuxtApp.payload.githubStars = githubStars.value;
});

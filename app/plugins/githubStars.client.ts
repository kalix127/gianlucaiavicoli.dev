export default defineNuxtPlugin((nuxtApp) => {
  const storedStars = nuxtApp.payload?.githubStars as Record<string, number>;

  const githubStars = ref<Record<string, number>>(storedStars);

  return {
    provide: {
      githubStars,
    },
  };
});

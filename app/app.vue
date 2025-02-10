<script setup lang="ts">
const { themeClass, radius } = useThemes();
const { site } = useAppConfig();

useSeoMeta({
  ogImage: site?.ogImage,
});
useServerHead({
  bodyAttrs: {
    class: themeClass.value,
    style: `--radius: ${radius.value}rem;`,
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

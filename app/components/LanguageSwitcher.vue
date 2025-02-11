<script setup lang="ts">
const { setLocale, locale: initialLocale, t } = useI18n();
const route = useRoute();

interface Locale {
  value: "en-US" | "it-IT";
  label: string;
}

const currentLocale = ref(initialLocale.value);

async function handleLocaleChange(locale: Locale["value"]) {
  await setLocale(locale);
  // Update page title when language changes
  const routeName = route.name === "index" ? "home" : route.name as string;

  useSeoMeta({
    title: t(`seo.${routeName}.title`),
    ogTitle: t(`seo.${routeName}.title`),
    description: t(`seo.${routeName}.description`),
    ogDescription: t(`seo.${routeName}.description`),
  });

  useHead({
    htmlAttrs: {
      lang: locale,
    },
  });
}

const locales: Locale[] = [
  { value: "en-US", label: t("language.en") },
  { value: "it-IT", label: t("language.it") },
];

watch(currentLocale, (v) => {
  handleLocaleChange(v);
});
</script>

<template>
  <Select v-model="currentLocale">
    <SelectTrigger as-child>
      <div data-allow-mismatch="class" class="grid place-content-center" :aria-label="t('language.select')">
        <Button variant="ghost" size="icon" aria-label="Select language">
          <Icon name="material-symbols:translate" size="18" aria-hidden="true" />
        </Button>
      </div>
    </SelectTrigger>
    <SelectContent>
      <SelectItem v-for="locale in locales" :key="locale.value" :value="locale.value">
        {{ locale.label }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>

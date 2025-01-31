<script setup lang="ts">
const { setLocale, locale: initialLocale, t } = useI18n();

interface Locale {
  value: "en-US" | "it-IT";
  label: string;
}

const currentLocale = ref(initialLocale.value);

function toggleLocale(locale: Locale["value"]) {
  setLocale(locale);
}

const locales: Locale[] = [
  { value: "en-US", label: t("language.en") },
  { value: "it-IT", label: t("language.it") },
];

watch(currentLocale, (v) => {
  toggleLocale(v);
});
</script>

<template>
  <Select v-model="currentLocale">
    <SelectTrigger as-child>
      <div class="grid place-items-center">
        <Button variant="ghost" size="icon">
          <Icon name="material-symbols:translate" size="18" />
          <span class="sr-only">{{ t("language.select") }}</span>
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

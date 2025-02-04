<script setup lang="ts">
const { t } = useI18n();

const items = computed(() => [
  {
    start: t("education.steps.diploma.start"),
    end: t("education.steps.diploma.end"),
    title: t("education.steps.diploma.title"),
    description: t("education.steps.diploma.description"),
  },
  {
    start: t("education.steps.freelancing.start"),
    end: t("education.steps.freelancing.end"),
    title: t("education.steps.freelancing.title"),
    description: t("education.steps.freelancing.description"),
  },
  {
    start: t("education.steps.opensource.start"),
    end: t("education.steps.opensource.end"),
    title: t("education.steps.opensource.title"),
    description: t("education.steps.opensource.description"),
  },
]);
</script>

<template>
  <div>
    <div v-for="item in items" :key="item.title" class="flex gap-x-1">
      <!-- Time -->
      <div class="flex min-w-10 flex-col items-center text-sm text-muted-foreground sm:gap-2 sm:whitespace-nowrap md:min-w-28 md:flex-row md:items-start md:justify-end md:text-base">
        <span>
          {{ item.start }}
        </span>
        <span>-</span>
        <span>
          {{ item.end }}
        </span>
      </div>

      <!-- Separator -->
      <div class="relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-gray-400 dark:after:bg-gray-600">
        <div class="relative z-10 flex size-7 items-center justify-center">
          <div class="size-2 rounded-full bg-gray-400 dark:bg-gray-600" />
        </div>
      </div>

      <div class="grow pb-6 pt-0.5">
        <!-- Title -->
        <h3 class="flex gap-x-1.5 font-semibold text-foreground">
          {{ item.title }}
        </h3>

        <!-- Description  -->
        <p class="mt-1 text-sm text-muted-foreground">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
const error = useError();

const { t } = useI18n();

useSeoMeta({
  title: t("seo.error.title"),
  description: t("seo.error.description"),
});

const message = computed(() => {
  switch (error.value?.statusCode) {
    case 404:
      return t("error.page_not_found");

    case 500:
      return t("error.internal_server_error");

    default:
      return t("error.something_went_wrong");
  }
});

function takeHome() {
  clearError({
    redirect: "/",
  });
}
</script>

<template>
  <NuxtLayout>
    <div class="grid h-full place-content-center space-y-8">
      <div class="flex flex-col items-center gap-6 text-center">
        <div class="grid place-content-center rounded-full bg-primary/10 p-3">
          <Icon v-if="error?.statusCode === 404" name="heroicons:exclamation-circle" size="24" class="text-primary" />
          <Icon v-else name="heroicons:exclamation-triangle" size="24" class="text-primary" />
        </div>

        <h1 class="text-3xl font-bold sm:text-4xl md:text-5xl">
          {{ error?.statusCode }}
        </h1>

        <p class="text-muted-foreground">
          {{ message }}
        </p>

        <Button @click="takeHome">
          <Icon name="heroicons:arrow-left" size="18" class="mr-2" />
          {{ $t("error.take_home") }}
        </Button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { socials } = useAppConfig();
const { t, locale } = useI18n();

useSeoMeta({
  title: t("seo.home.title"),
  ogTitle: t("seo.home.title"),
  description: t("seo.home.description"),
  ogDescription: t("seo.home.description"),
});

const socialLinks = [
  {
    label: t("socials.profile_github"),
    icon: "mdi:github",
    link: socials.github,
  },
  {
    label: t("socials.repository_github"),
    icon: "mdi:source-branch",
    link: socials.repository,
  },
  {
    label: t("socials.profile_linkedin"),
    icon: "mdi:linkedin",
    link: socials.linkedin,
  },
  {
    label: t("socials.profile_reddit"),
    icon: "mdi:reddit",
    link: socials.reddit,
  },
  {
    label: t("socials.profile_x"),
    icon: "mdi:twitter",
    link: socials.x,
  },
];

async function downloadCV() {
  const pdfPath = `/resume/${locale.value}.pdf`;
  try {
    const response = await fetch(pdfPath);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `gianluca-iavicoli-resume-${locale.value.split("-")[0]}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading CV:", error);
  }
}
</script>

<template>
  <div class="grid place-content-center space-y-8">
    <div class="flex max-w-md flex-col items-center justify-center gap-4">
      <!-- Title, Subtitle, Description -->
      <div class="space-y-2 text-center">
        <h1 class="text-lg font-bold sm:text-xl md:text-2xl">
          {{ t("home.my_name_is") }}
        </h1>
        <!-- Subtitle -->
        <h2 class="text-3xl font-bold sm:text-4xl md:text-5xl">
          Gianluca Iavicoli
        </h2>
        <!-- Description -->
        <span
          class="text-md !mt-2 text-muted-foreground sm:text-lg md:flex-row md:text-xl"
        >
          {{ t("home.description") }}
        </span>
      </div>
      <!-- Socials -->
      <div class="flex items-center gap-4">
        <TooltipProvider :delay-duration="50">
          <Tooltip v-for="social in socialLinks" :key="social.label">
            <TooltipTrigger as-child>
              <NuxtLink :to="social.link" external target="_blank">
                <Button
                  v-umami="social.label"
                  :aria-label="social.label"
                  variant="ghost"
                  size="icon"
                >
                  <Icon :name="social.icon" size="22" aria-hidden="true" />
                </Button>
              </NuxtLink>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>{{ social.label }}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <!-- Download CV -->
      <div
        class="relative flex size-fit flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      >
        <Button
          v-umami="$t('home.download_cv')"
          variant="outline"
          size="lg"
          @click="downloadCV"
        >
          <Icon name="mdi:download" size="20" />
          {{ t("home.download_cv") }}
        </Button>
        <BorderBeam :size="70" :duration="7" :border-width="2" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

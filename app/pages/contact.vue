<script setup lang="ts">
const { socials } = useAppConfig();
const { t } = useI18n();

useSeoMeta({
  title: t("seo.contact.title"),
  ogTitle: t("seo.contact.title"),
  description: t("seo.contact.description"),
  ogDescription: t("seo.contact.description"),
});

const items = computed(() => [
  {
    title: t("socials.contact_email"),
    icon: "tabler:send",
    to: socials.email,
  },
  {
    title: t("socials.contact_github"),
    icon: "mdi:github",
    to: socials.github,
  },
  {
    title: t("socials.contact_linkedin"),
    icon: "mdi:linkedin",
    to: socials.linkedin,
  },
  {
    title: t("socials.contact_x"),
    icon: "mdi:twitter",
    to: socials.x,
  },
  {
    title: t("socials.contact_reddit"),
    icon: "mdi:reddit",
    to: socials.reddit,
  },
]);
</script>

<template>
  <div class="mx-auto grid max-w-sm place-content-center space-y-8">
    <div class="space-y-8">
      <!-- Title -->
      <h1 class="text-2xl font-bold sm:text-3xl md:text-4xl">
        {{ $t("contact.title") }}
      </h1>

      <!-- Description -->
      <p class="!mt-2 text-muted-foreground">
        {{ $t("contact.description") }}
      </p>

      <div class="space-y-4">
        <div
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          :title="item.title"
          :external="true"
          target="_blank"
          class="flex items-center gap-2"
        >
          <Icon :name="item.icon" size="24" />
          <NuxtLink
            :to="item.to"
            :title="item.title"
            :external="true"
            target="_blank"
          >
            <p
              class="relative cursor-pointer transition-all ease-in-out before:absolute before:bottom-0 before:left-1/2 before:h-px before:w-0 before:origin-center before:bg-gray-400 before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:bottom-0 after:right-1/2 after:h-px after:w-0 after:origin-center after:bg-gray-400 after:transition-[width] after:duration-700 after:ease-in-out hover:text-muted-foreground hover:before:w-1/2 hover:after:w-1/2"
            >
              {{ item.title }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

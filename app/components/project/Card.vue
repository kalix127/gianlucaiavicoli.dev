<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { Project } from "~~";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  project: Project;
}>();

const isPreviewOpen = ref(false);

const projectIcon = computed(() => {
  const isDark = useColorMode().preference === "dark";
  return isDark ? props.project.icons?.dark : props.project.icons?.light;
});

function togglePreview() {
  isPreviewOpen.value = !isPreviewOpen.value;
}

const { data: stars } = await useFetch<number>(
  `https://api.github.com/repos/${props.project.github}`,
  {
    headers: {
      "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    transform: (data: any) => data.stargazers_count as number,
  },
);
</script>

<template>
  <CardSpotlight :class="$props.class">
    <div class="flex size-full flex-col justify-between gap-4">
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <!-- Logo  -->
          <Icon v-if="projectIcon" :name="`logo:${projectIcon}`" size="18" />

          <!-- Title -->
          <h3 class="text-lg font-semibold">
            {{ project.title }}
          </h3>
        </div>

        <div v-if="$props.project.github" class="flex items-center gap-1">
          <Icon name="material-symbols:star-rounded" size="16" class="text-[#FFDF00]" />
          <span class="text-sm">
            {{ stars }}
          </span>
        </div>

        <p class="text-sm text-muted-foreground">
          {{ $t(project.description) }}
        </p>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-2">
        <NuxtLink v-if="project.link" :to="project.link" target="_blank">
          <Button variant="outline" size="sm">
            {{ $t("projects.visit") }}
            <Icon name="mingcute:external-link-line" size="16" />
          </Button>
        </NuxtLink>
        <Button v-if="project.previewUrl" variant="outline" size="sm" @click="togglePreview">
          <Icon name="material-symbols:play-circle-outline-rounded" size="16" />
        </Button>
      </div>
    </div>

    <!-- Project preview -->
    <ProjectPreview
      v-if="isPreviewOpen && project.previewUrl"
      :src="project.previewUrl"
      :alt="`${$t('projects.preview_of')} - ${project.title}`"
      @close="togglePreview"
    />
  </CardSpotlight>
</template>

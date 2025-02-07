<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-col gap-2">
      <h2 class="text-center text-lg font-bold sm:text-xl md:text-left md:text-2xl">
        {{ title }}
      </h2>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>

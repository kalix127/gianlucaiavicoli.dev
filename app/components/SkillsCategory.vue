<script setup lang="ts">
defineProps<{
  title: string;
  items: { name: string; icon: string; url: string }[];
}>();
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-col gap-2">
      <h2 class="text-center text-lg font-bold sm:text-xl md:text-left md:text-2xl">
        {{ title }}
      </h2>
    </div>
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
      <NuxtLink v-for="item in items" :key="item.name" target="_blank" :external="true" :to="item.url" :title="item.name" class="flex flex-col items-center gap-2">
        <Icon :name="item.icon" size="40" />
        <span class="select-none text-center text-sm font-semibold md:text-base">{{ item.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>

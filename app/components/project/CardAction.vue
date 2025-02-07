<!-- ProjectCardAction.vue -->
<script setup lang="ts">
defineProps<{
  label: string;
  icon: string;
  to?: string;
  external?: boolean;
}>();

defineEmits(["showPreview"]);
</script>

<template>
  <Tooltip>
    <TooltipTrigger as-child>
      <!-- Other actions -->
      <template v-if="external">
        <NuxtLink
          :to="$props.to"
          :target="$props.external ? '_blank' : undefined"
        >
          <Button variant="outline" size="sm">
            <Icon :name="$props.icon" size="16" />
          </Button>
        </NuxtLink>
      </template>

      <!-- Preview -->
      <template v-else-if="to">
        <Button variant="outline" size="sm" @click="$emit('showPreview')">
          <Icon :name="$props.icon" size="16" />
        </Button>
      </template>
    </TooltipTrigger>
    <TooltipContent>
      <p>{{ $props.label }}</p>
    </TooltipContent>
  </Tooltip>
</template>

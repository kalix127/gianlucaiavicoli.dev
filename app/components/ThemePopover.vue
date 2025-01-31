<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="ghost" size="icon">
        <Icon name="lucide:paintbrush" size="18" />
      </Button>
    </PopoverTrigger>
    <PopoverContent
      class="w-[300px] md:w-[26rem]"
      :align="breakpoints.isGreaterOrEqual('md') ? 'end' : 'center'"
    >
      <ThemeCustomizer />
    </PopoverContent>
  </Popover>
</template>

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
      :align="breakpoints.isGreaterOrEqual('md') ? 'end' : 'center'"
      as-child
    >
      <ScrollArea class="h-[60vh] w-[300px] md:h-full md:w-[26rem]">
        <ThemeCustomizer />
      </ScrollArea>
    </PopoverContent>
  </Popover>
</template>

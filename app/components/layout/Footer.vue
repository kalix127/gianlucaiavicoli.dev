<script setup lang="ts">
const { footer } = useAppConfig();
</script>

<template>
  <footer class="py-2 text-muted-foreground md:px-8 md:py-0">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        {{ $t("footer.made_with") }}
        &#10084;
        {{ $t("footer.by") }}
        <NuxtLink class="font-bold underline underline-offset-2" :to="footer.credits.to" target="_blank">
          {{ footer.credits.title }}
        </NuxtLink>
      </div>
      <p>
        &copy; {{ new Date().getFullYear() }} Gianluca Iavicoli. {{ $t("footer.rights_reserved") }}.
      </p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
</script>

<template>
  <div class="wrapper">
    <LayoutHeader />
    <main>
      <Background>
        <slot />
      </Background>
    </main>
    <LayoutFooter />
  </div>
</template>

<style scoped>

</style>

<style scoped>
.wrapper {
  display: grid;
  min-height: 100svh;
  grid-template-rows: 128px 1fr 84px;
  grid-template-areas:
    "header"
    "main"
    "footer";
}
@media (min-width: 319px) {
  .wrapper {
    grid-template-rows: 128px 1fr 64px;
  }
}

@media (min-width: 768px) {
  .wrapper {
    grid-template-rows: 80px 1fr 64px;
  }
}

header {
  display: grid;
  grid-area: header;
}

main {
  display: grid;
  grid-area: main;
}

footer {
  display: grid;
  grid-area: footer;
}
</style>

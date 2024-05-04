<template>
  <section>
    <slot />
  </section>
</template>

<style scoped>
  section {
    scroll-margin-top: 72px;
    padding: 32px 64px;
  }

  @media screen and (max-width: 640px) {
    section {
      scroll-margin-top: 64px;
      padding: 20px;
    }
  }
</style>

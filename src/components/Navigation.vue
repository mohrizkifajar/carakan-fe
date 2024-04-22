<script setup>
defineProps({
  previous: String,
  previousLink: String,
  next: String,
  nextLink: String,
})
</script>

<template>
  <div class="navigation">
      <RouterLink :to="previousLink" class="link">
        <img src="/left-arrow.svg" alt="Left" />
        <span>{{ previous }}</span>
      </RouterLink>

      <RouterLink :to="nextLink" class="link">
        <span>{{ next }}</span>
        <img src="/right-arrow.svg" alt="Right" />
      </RouterLink>
    </div>
</template>

<style>
  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  .link {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  .link span {
    font-size: 12px;
    font-weight: 600;
    color: var(--neutral-color);
  }
</style>

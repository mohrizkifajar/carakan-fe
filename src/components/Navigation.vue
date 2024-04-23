<script setup>
defineProps({
  title: String,
  link: String,
})
</script>

<template>
  <div class="navigation">
    <RouterLink :to="link" class="link">
      <img src="/left-arrow.png" alt="Left" />
      <span>{{ title }}</span>
    </RouterLink>
  </div>
</template>

<style>
  .navigation {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 16px;
  }
  .link {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    border-radius: 9999px;
    background-color: #eee;
    box-shadow: 0 1px 3px 0px rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }
  .link span {
    font-size: 12px;
    font-weight: 600;
    color: var(--neutral-color);
  }
</style>

<script setup>
defineProps({
  to: String,
});
</script>

<template>
  <RouterLink :to="to" class="btn">
    <slot />
  </RouterLink>
</template>

<style>
  .btn {
    display: flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    padding: 12px 24px;
    border-radius: 4px;
    border: 1px solid var(--primary-color-500);
    background-color: var(--primary-color-500);
    transition: all 300ms ease;
    text-decoration: none;
  }
  .btn .text {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }
  .btn:hover {
    background-color: var(--primary-color-600);
  }
</style>

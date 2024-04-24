<script setup>
defineProps({
  small: Boolean,
  to: String,
})
</script>

<template>
  <RouterLink :to="to" class="btn" :class="{ small: small }">
    <slot />
  </RouterLink>
</template>

<style scoped>
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    text-decoration: none;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    transition: background-color, color, 300ms ease-in-out;
  }
  .btn.primary {
    border: 1px solid var(--primary-color);
    background-color: var(--primary-color);
    color: #fff;
  }
  .btn.primary:hover {
    background-color: #2649D5;
  }
  .btn.secondary {
    border: 1px solid var(--neutral-color);
    background-color: transparent;
    color: var(--neutral-color);
  }
  .btn.secondary:hover {
    background-color: var(--neutral-color);
    color: #fff;
  }
  .btn.primary.alternate {
    border: 1px solid #fff;
    background-color: #fff;
    color: #000;
  }
  .btn.primary.alternate:hover {
    background-color: transparent;
    color: #fff;
  }
  .btn.secondary.alternate {
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
  }
  .btn.secondary.alternate:hover {
    background-color: #fff;
    color: #000;
  }
  .btn.small {
    padding: 8px 20px;
  }
  .btn.full {
    width: 100%;
  }
</style>

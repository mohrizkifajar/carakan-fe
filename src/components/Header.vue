<script setup>
import { onMounted, ref } from 'vue';
import feather from 'feather-icons';
import Button from './Button.vue';
</script>

<template>
  <header>
    <RouterLink to="/" class="logo">
      <img src="/logo.png" alt="Hanacaraka" />
    </RouterLink>
  </header>
</template>

<style scoped>
  header {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 72px;
     padding: 0 64px;
    background-color: var(--primary-color-500);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
  .logo {
    display: flex;
    align-items: center;
  }
  .logo img {
    height: 32px;
  }

  @media screen and (max-width: 640px) {
    header {
      height: 64px;
      padding: 0 20px;
    }
  }
</style>

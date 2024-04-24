<script setup>
import { computed, ref } from 'vue'
import Button from './Button.vue'
import store from '../store'

const show = ref(false)

const toggleMenu = (event) => {
  show.value = !show.value
}
</script>

<template>
  <header :class="{ fixed: store.get('isFixed') }">
    <RouterLink to="/" class="logo">
      <img src="/logo.png" alt="Hanacaraka" />
    </RouterLink>

    <nav>
      <RouterLink to="/" class="nav-link">Beranda</RouterLink>
      <RouterLink to="/about-us" class="nav-link">Tentang Aplikasi</RouterLink>

      <div class="actions">
        <Button to="/convert" class="primary alternate" small>Konversi</Button>
      </div>
    </nav>

    <div class="menu-toggle">
      <img src="/close.png" alt="Close Menu" v-if="show" @click="toggleMenu" />
      <img src="/menu.png" alt="Open Menu" v-else @click="toggleMenu" />
    </div>
  </header>

  <Transition name="slide">
    <div v-show="show" class="responsive-nav">
      <RouterLink to="/" class="nav-link secondary">Beranda</RouterLink>
      <RouterLink to="/about-us" class="nav-link secondary">Tentang Aplikasi</RouterLink>

      <div class="responsive-nav-actions">
        <Button to="/convert" class="primary full" small>Konversi</Button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.5s ease;
  }
  .slide-enter-from,
  .slide-leave-to {
    transform: translateY(-100%);
  }
  header {
    position: relative;
    z-index: 20;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 72px;
    padding: 0 64px;
    background-color: var(--primary-color);
    transition: all 0.5s ease;
  }
  .fixed {
    position: fixed;
  }
  .logo {
    display: flex;
    align-items: center;
  }
  .logo img {
    height: 32px;
  }
  nav {
    display: flex;
    align-items: center;
    gap: 32px;
  }
  .nav-link {
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }
  .nav-link.secondary {
    color: #000;
  }
  .actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .responsive-nav {
    display: none;
  }
  .menu-toggle {
    width: 24px;
    height: 24px;
    display: none;
  }
  .menu-toggle img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 640px) {
    header {
      height: 64px;
      padding: 0 20px;
    }
    .logo img {
      height: 32px;
    }
    nav {
      display: none;
    }
    .responsive-nav {
      position: sticky;
      z-index: 10;
      top: 64px;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      width: 100%;
      padding: 0 20px;
      padding-top: 16px;
      padding-bottom: 64px;
      background-color: #fff;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
    .responsive-nav-actions {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 16px;
    }
    .menu-toggle {
      display: block;
      cursor: pointer;
    }
  }
</style>

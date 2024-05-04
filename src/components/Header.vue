<script setup>
import { computed, onMounted, ref } from 'vue'
import feather from 'feather-icons';
import Button from './Button.vue'
import store from '../store'

const show = ref(false)
const menuToggle = ref(null)
const menuIcon = feather.icons.menu.toSvg()
const xIcon = feather.icons.x.toSvg()

const toggleMenu = (event) => {
  show.value = !show.value
}

onMounted(() => {
  window.onclick = (event) => {
    if (!menuToggle.value.contains(event.target)) {
      show.value = false
    }
  }
})
</script>

<template>
  <header>
    <div class="navbar">
      <RouterLink to="/" class="logo">
        <img src="/logo.png" alt="Hanacaraka" />
      </RouterLink>

      <nav>
        <a href="#home" class="nav-link">Beranda</a>
        <a href="#how-to-use" class="nav-link">Petunjuk</a>
      </nav>

      <div class="menu-toggle" ref="menuToggle" @click="toggleMenu">
        <span v-html="menuIcon"></span>
      </div>
    </div>

    <Transition name="slide">
      <div v-show="show" class="responsive-nav">
        <a href="#home" class="nav-link secondary">Beranda</a>
        <a href="#how-to-use" class="nav-link secondary">Petunjuk</a>
      </div>
    </Transition>
  </header>
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
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 72px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
  .navbar {
    position: relative;
    z-index: 20;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 64px;
    background-color: var(--primary-color-500);
  }
  .logo {
    display: flex;
    align-items: center;
  }
  .logo img {
    height: 32px;
  }
  .navbar nav {
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
  .menu-toggle span {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #fff;
  }
  /*.menu-toggle img {
    width: 100%;
    height: 100%;
  }*/

  @media screen and (max-width: 640px) {
    header {
      height: 64px;
    }
    .logo img {
      height: 32px;
    }
    .navbar {
      padding: 0 20px;
    }
    .navbar nav {
      display: none;
    }
    .responsive-nav {
      position: sticky;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      width: 100%;
      padding: 0 20px;
      padding-top: 16px;
      padding-bottom: 32px;
      background-color: #fff;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
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

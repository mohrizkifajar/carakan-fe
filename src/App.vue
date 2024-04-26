<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import store from './store'

onMounted(() => {
  const header = document.querySelector('header')

  window.onscroll = () => {
    store.set('scrolled', window.scrollY > header.offsetTop)
  }
})
</script>

<template>
  <Header />
  <RouterView />
</template>

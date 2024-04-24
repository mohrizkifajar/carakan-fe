<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import store from './store'

const header = document.querySelector('header')

onMounted(() => {
  window.onscroll = () => {
    if (window.scrollY > header.offsetTop) {
      store.set('isFixed', true)
    } else {
      store.set('isFixed', false)
    }
  }
})
</script>

<template>
  <Header />
  <RouterView />
</template>

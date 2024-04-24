<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import store from './store'

onMounted(() => {
  window.onscroll = () => {
    if (window.scrollY > 0) {
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

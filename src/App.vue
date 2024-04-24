<script setup>
import { onMounted, ref } from 'vue'
import Header from './components/Header.vue'
import store from './store'

const header = ref(null)

onMounted(() => {
  window.onscroll = () => {
    if (window.scrollY > header.value.offsetTop) {
      store.set('isFixed', true)
    } else {
      store.set('isFixed', false)
    }
  }
})
</script>

<template>
  <Header ref="header" />
  <RouterView />
</template>

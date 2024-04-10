<script setup>
import { ref, reactive, computed, onMounted } from 'vue'

defineProps({
  msg: String,
})
</script>

<template>
  <p>{{ msg }}</p>
</template>

<style scoped>
p {
  color: green;
}
</style>

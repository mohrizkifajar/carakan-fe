<script setup>
import Cropper from '../components/Cropper.vue';
import Navigation from '../components/Navigation.vue';
</script>

<template>
  <section>
    <Navigation title="Pindai" link="/convert" />

    <div class="container">
      <Cropper />
    </div>
  </section>
</template>

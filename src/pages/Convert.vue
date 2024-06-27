<script setup>
import Camera from '../components/Camera.vue';
import CameraSkeleton from '../components/CameraSkeleton.vue';
import Navigation from '../components/Navigation.vue';
</script>

<template>
  <section>
    <Navigation title="Home" link="/" />

  	<div class="container">
      <Suspense>
        <Camera />

        <template #default>
          <CameraSkeleton />
        </template>
      </Suspense>
    </div>
  </section>
</template>

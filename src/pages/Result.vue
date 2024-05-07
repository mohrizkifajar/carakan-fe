<script setup>
import ConvertedImage from '../components/ConvertedImage.vue';
import ConvertedImageSkeleton from '../components/ConvertedImageSkeleton.vue';
import Navigation from '../components/Navigation.vue';
</script>

<template>
  <section>
    <Navigation title="Pangkas" link="/crop" />

    <div class="container">
      <Suspense>
        <ConvertedImage />

        <template #fallback>
          <ConvertedImageSkeleton />
        </template>
      </Suspense>
    </div>
  </section>
</template>

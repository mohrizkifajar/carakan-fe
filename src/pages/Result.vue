<script setup>
import Content from '../components/Content.vue'
import ConvertedImage from '../components/ConvertedImage.vue'
import ConvertedImageSkeleton from '../components/ConvertedImageSkeleton.vue'
import Navigation from '../components/Navigation.vue'
</script>

<template>
  <Content>
    <Navigation title="Pangkas" link="/crop" />

    <div class="container">
      <Suspense>
        <ConvertedImage />

        <template #fallback>
          <ConvertedImageSkeleton />
        </template>
      </Suspense>
    </div>
  </Content>
</template>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  @media screen and (max-width: 640px) {
    .container {
      flex-direction: column;
    }
  }
</style>

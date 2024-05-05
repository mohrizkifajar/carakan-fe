<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import Cropper from 'cropperjs';
import feather from 'feather-icons';
import Navigation from '../components/Navigation.vue';
import Section from '../components/Section.vue';
import store from '../store';

const router = useRouter();
let cropper = null;
const image = ref(null);

const crop = async (event) => {
  const cropped = cropper.getCroppedCanvas().toDataURL();

  store.set('cropped', cropped);
  router.push('/result');
}

watchEffect(() => {
  if (image.value) {
    cropper = new Cropper(image.value, {
      aspectRatio: 0,
      viewMode: 1,
      movable: false,
      scalable: false,
      rotatable: false,
      zoomable: false,
      background: false,
    });
  }
});

onMounted(() => {
  image.value.src = store.get('captured');
})
</script>

<template>
  <Section>
    <Navigation title="Pindai" link="/convert" />

    <div class="container">
      <div class="crop-wrapper">
        <div class="crop-image">
          <img class="image" ref="image" />
        </div>

        <button @click="crop">
          <span v-html="feather.icons.crop.toSvg()"></span>
        </button>
      </div>
    </div>
  </Section>
</template>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .crop-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    width: 50%;
    height: 70vh;
    padding: 12px;
    border-radius: 8px;
    background-color: var(--primary-color-100);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
  .crop-image {
    width: 100%;
    height: 80%;
  }
  .image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: #fff;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    cursor: pointer;
  }
  button span {
    width: 24px;
    height: 24px;
    color: var(--primary-color-500);
  }

  @media screen and (max-width: 640px) {
    .container {
      flex-direction: column;
    }
    .crop-wrapper {
      width: 100%;
    }
  }
</style>

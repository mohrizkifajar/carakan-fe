<script setup>
import { computed, onMounted, ref, watchEffect } from 'vue'
import { useDevicesList, useUserMedia } from '@vueuse/core'
import { useRouter } from 'vue-router'
import feather from 'feather-icons'
import Navigation from '../components/Navigation.vue'
import Section from '../components/Section.vue'
import store from '../store'

const router = useRouter()
const video = ref(null)
const canvas = ref(null)

const { videoInputs: cameras } = useDevicesList({
  requestPermission: true,
})
const currentCamera = computed(() => cameras.value[0]?.deviceId)

const { stream, start } = useUserMedia({
  constraints: {
    video: {
      deviceId: currentCamera,
      width: 1280,
      height: 720,
      facingMode: 'environment',
    },
  },
})

const take = (event) => {
  video.value.pause()

  const context = canvas.value.getContext('2d')
  context.fillStyle = '#fff'
  context.fillRect(0, 0, canvas.value.width, canvas.value.height)
  context.drawImage(
    video.value,
    (canvas.value.width - video.value.videoWidth) / 2,
    (canvas.value.height - video.value.videoHeight) / 2
  )

  store.set('captured', canvas.value.toDataURL())
  router.push('/crop')
}

onMounted(() => {
  start()
})

watchEffect(() => {
  if (video.value) {
    video.value.srcObject = stream.value
  }
})
</script>

<template>
  <Section>
    <Navigation title="Home" link="/" />

  	<div class="container">
      <div class="video-wrapper">
        <video ref="video" autoplay></video>

        <button @click="take">
          <span v-html="feather.icons.camera.toSvg()"></span>
        </button>
      </div>

      <canvas ref="canvas" width="720" height="1280"></canvas>
    </div>
  </Section>
</template>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .video-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    width: 50%;
    height: 70vh;
    padding: 12px;
    border-radius: 8px;
    background-color: var(--background-light);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
  video {
    width: 100%;
    height: 80%;
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
    color: var(--primary-color);
  }
  canvas {
    display: none;
  }

  @media screen and (max-width: 640px) {
    .container {
      flex-direction: column;
    }
    .video-wrapper {
      width: 100%;
      padding: 12px 0;
    }
  }
</style>

<script setup>
import { ref } from 'vue';
import feather from 'feather-icons';

const video = ref(null);
const played = ref(false);

const play = (event) => {
  played.value = true;
  video.value.play();
}
</script>

<template>
  <section class="how-to-use">
    <div class="how-to-use-content">
      <h2>Cara Penggunaan</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Maxime nesciunt provident omnis doloribus. Libero, nulla!
      </p>
    </div>

    <div class="how-to-use-video">
      <video src="/how_to_use.mp4" controls controlslist="nodownload nofullscreen noremoteplayback" ref="video" @ended="played=false"></video>
      <img src="/how_to_use.png" alt="How to Use" v-show="!played" />
      <span
        v-if="!played"
        @click="play"
        v-html="feather.icons['play-circle'].toSvg({ width: 28, height: 28 })"
        class="play"
      ></span>
    </div>
  </section>
</template>

<style scoped>
  .how-to-use {
    display: flex;
    background-color: var(--primary-color-100);
  }
  .how-to-use-content {
    width: 50%;
  }
  .how-to-use-content h2 {
    font-size: 40px;
    font-weight: 700;
    color: var(--neutral-color-900);
    margin-bottom: 24px;
  }
  .how-to-use-content p {
    font-size: 18px;
    font-weight: 400;
    color: var(--neutral-color-900);
  }
  .how-to-use-video {
    position: relative;
    width: 50%;
    aspect-ratio: 16/9;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  .how-to-use-video video {
    width: 100%;
    aspect-ratio: 16/9;
  }
  .how-to-use-video img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio: 16/9;
  }
  .how-to-use-video .play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background-color: var(--primary-color-200);
    box-shadow: 0 0 10px rgb(71 59 250 / 0.1), 0 0 5px rgb(71 59 250 / 0.3);
    color: #fff;
    cursor: pointer;
  }

  @media screen and (max-width: 640px) {
    .how-to-use {
      flex-direction: column;
    }
    .how-to-use-content {
      width: 100%;
      margin-bottom: 24px;
    }
    .how-to-use-content h2 {
      font-size: 32px;
      margin-bottom: 16px;
    }
    .how-to-use-content p {
      font-size: 16px;
    }
    .how-to-use-video {
      width: 100%;
    }
  }
</style>

<script setup>
import { ref } from 'vue';
import feather from 'feather-icons';

const played = ref(false);

const play = (event) => {
  played.value = true;
}
</script>

<template>
  <section class="how-to-use" id="how-to-use">
    <div class="content">
      <h2>Cara Penggunaan</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Maxime nesciunt provident omnis doloribus. Libero, nulla!
      </p>
    </div>

    <div class="video">
      <iframe
        src="https://www.youtube.com/embed/Z2JzsulfMtU?si=RguFi5yKxsIpFHvI&amp;controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <img src="/how_to_use.png" alt="How to Use" v-show="!played" />
      <span
        v-if="!played"
        class="play"
        v-html="feather.icons['play-circle'].toSvg({ width: 28, height: 28 })" @click="play"
      ></span>
    </div>
  </section>
</template>

<style scoped>
  .how-to-use {
    display: flex;
    background-color: var(--primary-color-100);
  }
  .content {
    width: 50%;
  }
  .content h2 {
    margin-bottom: 24px;
    font-size: 40px;
    font-weight: 700;
    color: var(--neutral-color-900);
  }
  .content p {
    font-size: 18px;
    font-weight: 400;
    color: var(--neutral-color-900);
  }
  .video {
    position: relative;
    width: 50%;
    aspect-ratio: 16/9;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
  }
  iframe {
    width: 100%;
    aspect-ratio: 16/9;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio: 16/9;
  }
  .play {
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
    .content {
      width: 100%;
      margin-bottom: 24px;
    }
    .content h2 {
      margin-bottom: 16px;
      font-size: 32px;
    }
    .content p {
      font-size: 16px;
    }
    .video {
      position: relative;
      width: 100%;
      aspect-ratio: 16/9;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }
  }
</style>

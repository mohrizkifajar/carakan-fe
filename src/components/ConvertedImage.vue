<script setup>
import { v4 as uuid } from 'uuid';
import feather from 'feather-icons';
import store from '../store';

const convertImage = async () => {
  const response = await fetch('https://fajar.pythonanywhere.com/convert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image: store.get('cropped'),
      filename: uuid() + '.png',
    }),
  });

  const data = await response.json();
  store.set('converted', data.data.image_url);
  store.set('converted_text', data.data.converted_text);
}

await convertImage();
</script>

<template>
  <div class="result-wrapper">
    <div class="result-image">
      <img :src="store.get('converted')" />
    </div>

    <p class="converted_text">{{ store.get('converted_text') }}</p>

    <a class="result-btn" :href="store.get('converted')" download="output" target="_blank">
      <span v-html="feather.icons['download-cloud'].toSvg()"></span>
    </a>
  </div>
</template>

<style>
  .result-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    height: 70vh;
    padding: 12px;
    border-radius: 8px;
    background-color: var(--primary-color-100);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    overflow: hidden;
  }
  .result-image {
    width: 100%;
    height: 80%;
    background-color: #fff;
  }
  .result-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .converted_text {
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    text-transform: uppercase;
    color: var(--primary-color-900);
  }
  .result-btn {
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
  .result-btn span {
    width: 24px;
    height: 24px;
    color: var(--primary-color-500);
  }

  @media screen and (max-width: 640px) {
    .result-wrapper {
      width: 100%;
    }
  }
</style>

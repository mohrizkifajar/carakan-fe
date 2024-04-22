<script setup>
import { v4 as uuid } from 'uuid'
import store from '../store'

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
  })

  const data = await response.json()
  store.set('converted', data.data)
}

await convertImage()
</script>

<template>
  <div class="result-wrapper">
    <div class="result-image">
      <img :src="store.get('converted')" />
    </div>

    <a class="result-btn" :href="store.get('converted')" download="output" target="_blank">
      <img src="/download.png" />
    </a>
  </div>
</template>

<style>
  .result-wrapper {
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
    overflow: hidden;
  }
  .result-image {
    width: 100%;
    height: 80%;
  }
  .result-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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

  @media screen and (max-width: 640px) {
    .result-wrapper {
      width: 100%;
    }
  }
</style>

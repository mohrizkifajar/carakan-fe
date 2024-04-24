<script setup>
import Button from './Button.vue'
</script>

<template>
  <div class="hero">
    <div class="content">
      <h1>Translate with ease using Carakan</h1>
      <p>Experience the simplicity and effectiveness of our web-based translation app.</p>

      <div class="actions">
        <Button to="/convert" class="primary">Get Started</Button>
        <Button to="/" class="secondary">Learn More</Button>
      </div>
    </div>

    <div class="placeholder-image">
      <figure>
        <img src="/javanese_script.jpg" alt="Hero" />
        <div class="box"></div>
      </figure>
    </div>
  </div>
</template>

<style scoped>
  .hero {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
    min-height: 90vh;
  }
  .content {
    width: 50%;
    padding-right: 24px;
  }
  h1 {
    font-size: 56px;
    font-weight: 700;
    line-height: 120%;
    color: #000;
    margin-bottom: 24px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    color: #000;
    margin-bottom: 32px;
  }
  .actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .placeholder-image {
    position: relative;
    display: flex;
    justify-content: center;
    width: 50%;
    padding: 24px;
    background-color: var(--background-light);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
  figure {
    position: relative;
    width: 100%;
  }
  .box {
    position: absolute;
    top: 1px;
    left: 30px;
    width: 30px;
    height: 16px;
    border: 1px solid var(--primary-color);
  }
  /*figure::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    border-radius: 8px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(0px) saturate(150%);
    box-shadow: 0 1px 3px 0px rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }*/
  img {
    width: 100%;
  }

  @media screen and (max-width: 640px) {
    .hero {
      flex-direction: column;
      justify-content: center;
    }
    .content {
      width: 100%;
    }
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 16px;
    }
    .placeholder-image {
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
</style>

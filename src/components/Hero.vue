<script setup>
import Button from './Button.vue'
</script>

<template>
  <section class="hero" id="home">
    <div class="hero-content">
      <h1>Membaca aksara Jawa dengan mudah</h1>
      <p>
        <span>Hanacaraka</span> meng<b>konversi</b> tulisan <b>aksara Jawa</b>
        menjadi <b>latin</b> agar mudah untuk dibaca pengguna.
      </p>

      <Button to="/convert">
        <img src="/translate.png" alt="Translate" style="width: 28px;" />
        <span class="text">Konversi</span>
      </Button>
    </div>

    <div class="hero-image">
      <figure>
        <img src="/illust.jpg" alt="Hero" />
      </figure>
    </div>
  </section>
</template>

<style scoped>
  .hero {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 100vh;
  }
  .hero-content {
    width: 50%;
    padding-right: 24px;
  }
  .hero-content h1 {
    font-size: 56px;
    font-weight: 700;
    line-height: 120%;
    color: var(--neutral-color-900);
    margin-bottom: 24px;
  }
  .hero-content p {
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    color: var(--neutral-color-900);
    margin-bottom: 32px;
  }
  b {
    font-weight: 600;
    color: var(--primary-color-500);
  }
  span {
    font-weight: 700;
  }
  .hero-image {
    display: flex;
    justify-content: flex-end;
    width: 50%;
  }
  .hero-image figure {
    width: 480px;
  }
  .hero-image img {
    width: 100%;
  }

  @media screen and (max-width: 640px) {
    .hero {
      flex-direction: column;
      justify-content: flex-start;
      gap: 32px;
    }
    .hero-content {
      width: 100%;
    }
    .hero-content h1 {
      font-size: 40px;
    }
    .hero-content p {
      font-size: 16px;
    }
    span {
      font-size: 18px;
    }
    .hero-image {
      width: 100%;
    }
    .hero-image figure {
      width: 100%;
    }
    .hero-image figure img {
      width: 100%;
    }
  }
</style>

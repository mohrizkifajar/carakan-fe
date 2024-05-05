<script setup>
import Button from './Button.vue';
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Membaca aksara Jawa dengan mudah</h1>
      <p>
        <span>Hanacaraka</span> meng<b>konversi</b> tulisan <b>aksara Jawa</b>
        menjadi <b>latin</b> agar mudah untuk dibaca pengguna.
      </p>

      <Button to="/convert">
        <img src="/convert.svg" alt="Convert" style="width: 32px;" />
        <span class="text">Konversi</span>
      </Button>
    </div>

    <div class="hero-image">
      <figure>
        <img src="/conversion.svg" alt="Conversion" />
      </figure>
    </div>
  </section>
</template>

<style scoped>
  .hero {
    display: flex;
    align-items: center;
    min-height: 100vh;
  }
  .hero-content {
    width: 50%;
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
  .hero-content p span {
    font-weight: 700;
  }
  .hero-content p b {
    font-weight: 600;
    color: var(--primary-color-500);
  }
  .hero-image {
    display: flex;
    justify-content: flex-end;
    width: 50%;
  }
  .hero-image figure {
    width: 480px;
  }
  .hero-image figure img {
    width: 100%;
  }

  @media screen and (max-width: 640px) {
    .hero {
      flex-direction: column;
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
    .hero-image {
      width: 100%;
    }
    .hero-image figure {
      width: 100%;
    }
  }
</style>

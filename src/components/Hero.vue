<script setup>
import Button from './Button.vue'
</script>

<template>
  <div class="hero">
    <div class="content">
      <h1>Membaca aksara Jawa dengan mudah</h1>
      <p>
        Hanacaraka meng<b>konversi</b> tulisan <b>aksara Jawa</b> menjadi <b>latin</b> agar mudah untuk dibaca pengguna.
      </p>

      <div class="actions">
        <Button to="/convert" class="primary">
          <img src="/translate.png" alt="Translate" style="width: 28px;" />
          Konversi
        </Button>
      </div>
    </div>

    <!-- <div class="placeholder-image">
      <figure>
        <img src="/javanese_script.jpg" alt="Hero" />
      </figure>
    </div> -->
  </div>
</template>

<style scoped>
  .hero {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
    min-height: 100vh;
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
  b {
    font-weight: 600;
    color: var(--primary-color);
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
    width: 100%;
  }
  img {
    width: 100%;
  }

  @media screen and (max-width: 640px) {
    .hero {
      flex-direction: column;
      justify-content: flex-start;
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

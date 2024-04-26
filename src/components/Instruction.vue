<script setup>
import { ref } from 'vue'

const step = ref(1)

const move = (no) => {
  step.value = no
}
</script>

<template>
  <div id="instruction" class="instruction">
    <h2>Cara Penggunaan</h2>

    <div class="instructions">
      <Transition name="fade">
        <div v-if="step == 1" class="step">
          <img src="/step_01.png" alt="Step 1" />
          <h4>Pindai tulisan aksara Jawa pada kertas</h4>
        </div>

        <div v-else-if="step == 2" class="step">
          <img src="/step_01.png" alt="Step 2" />
          <h4>Lakukan pemangkasan pada gambar</h4>
        </div>

        <div v-else class="step">
          <img src="/step_01.png" alt="Step 3" />
          <h4>Lihat dan simpan hasil konversi</h4>
        </div>
      </Transition>
    </div>

    <div class="nav">
      <div class="dot" :class="{ active: step == 1 }" @click="move(1)"></div>
      <div class="dot" :class="{ active: step == 2 }" @click="move(2)"></div>
      <div class="dot" :class="{ active: step == 3 }" @click="move(3)"></div>
    </div>
  </div>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 1s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .instruction {
    padding: 32px 64px;
    scroll-margin-top: 64px;
    background-color: var(--background-light);
  }
  h2 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 24px;
  }
  .instructions {
    position: relative;
    width: 30%;
    height: 100vh;
  }
  .step {
    position: absolute;
  }
  .step img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 24px;
  }
  .step h4 {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }
  .nav {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
  }
  .dot {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: #fff;
  }
  .dot.active {
    background-color: var(--primary-color);
  }

  @media screen and (max-width: 640px) {
    .instruction {
      padding: 20px;
    }
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 16px;
    }
    .instructions {
      width: 100%;
    }
    .step {
      width: 100%;
    }
    .step img {
      margin-bottom: 16px;
    }
    .step h4 {
      font-size: 20px;
    }
  }
</style>

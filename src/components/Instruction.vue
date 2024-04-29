<script setup>
import { onMounted, ref } from 'vue'

const step = ref(1)

const move = (no) => {
  step.value = no
}

const transition = async () => {
  setInterval(() => {
    if (step.value == 3) {
      step.value = 1
    } else {
      step.value += 1
    }
  }, 5000)
}

onMounted(() => {
  transition()
})
</script>

<template>
  <div id="instruction" class="instruction">
    <h2>Cara Penggunaan</h2>

    <div class="instructions">
      <Transition name="fade">
        <div v-if="step == 1" class="step">
          <h4>1. Pindai tulisan aksara Jawa pada kertas</h4>
          <img src="/step_01.jpg" alt="Step 1" />
        </div>

        <div v-else-if="step == 2" class="step">
          <h4>2. Lakukan pemangkasan pada gambar</h4>
          <img src="/step_02.jpg" alt="Step 2" />
        </div>

        <div v-else class="step">
          <h4>3. Lihat dan simpan hasil konversi</h4>
          <img src="/step_03.jpg" alt="Step 3" />
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
  }
  .step h4 {
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    margin-bottom: 24px;
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
      font-size: 28px;
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
      font-size: 16px;
    }
  }
</style>

<template>
  <div class="camera">
    <video></video>

    <button></button>
  </div>
</template>

<style scoped>
  .camera button {
    background-color: #fff;
    animation: pulse 1s linear infinite;
  }

  @keyframes pulse {
    0% {
      background-color: #fff;
    }
    50% {
      background-color: #eee;
    }
    100% {
      background-color: #fff;
    }
  }
</style>

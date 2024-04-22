<template>
  <div class="result-wrapper">
    <div class="result-image"></div>

    <a class="result-btn"></a>
  </div>
</template>

<style scoped>
  .result-wrapper {
    /*background-color: #fff;*/
  }
  .result-image {
    background-color: #fff;
    animation: pulse 1s linear infinite;
  }
  .result-btn {
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

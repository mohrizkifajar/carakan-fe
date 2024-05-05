<template>
  <footer>
    <p>Copyright &copy; 2024 Hanacaraka</p>
  </footer>
</template>

<style scoped>
  footer {
    padding: 32px;
    background-color: var(--primary-color-200);
  }
  footer p {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: var(--primary-color-900);
  }

  @media screen and (max-width: 640px) {
    footer {
      padding: 20px;
    }
    footer p {
      font-size: 12px;
    }
  }
</style>

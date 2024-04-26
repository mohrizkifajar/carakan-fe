<script setup>
import Content from '../components/Content.vue'
import Hero from '../components/Hero.vue'
import Instruction from '../components/Instruction.vue'
</script>

<template>
  <Content>
    <Hero />
    
    <!-- <div class="palettes">
      <div class="shade" style="background-color: #DADFF2;">100</div>
      <div class="shade" style="background-color: #B1BFF3;">200</div>
      <div class="shade" style="background-color: #8DA3F4;">300</div>
      <div class="shade" style="background-color: #708DF2;">400</div>
      <div class="shade" style="background-color: #476BFA;">500</div>
      <div class="shade" style="background-color: #2649D5;">600</div>
      <div class="shade" style="background-color: #1534AF;">700</div>
      <div class="shade" style="background-color: #0C258B;">800</div>
      <div class="shade" style="background-color: #04124D;">900</div>
    </div> -->
  </Content>
  <Instruction />
</template>

<style scoped>
  .palettes {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
  }
  .shade {
    width: 60px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
</style>

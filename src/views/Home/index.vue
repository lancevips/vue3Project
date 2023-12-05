<template>
  <div class="home-wrapper">home</div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const login = () => {
  console.log(username.value, password.value)
}
</script>

<style lang="less">
.home-wrapper {
  width: 100%;
  height: 100vh;
  background: url('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg') no-repeat;
  background-size: cover;
}
</style>

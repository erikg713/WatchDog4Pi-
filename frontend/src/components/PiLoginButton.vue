<template>
  <button @click="login" class="bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700">
    Login with Pi
  </button>
</template>

<script setup>
import { loginWithPi } from '../utils/pi.js';

function login() {
  loginWithPi();
}
</script>

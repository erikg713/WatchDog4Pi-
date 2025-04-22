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
<template>
  <button @click="loginWithPi">Login with Pi</button>
</template>

<script setup>
import { authenticatePi } from '@/utils/pi.js';

function loginWithPi() {
  authenticatePi(
    user => alert('Logged in as ' + user.username),
    err => alert('Auth failed: ' + err.message)
  );
}
</script>

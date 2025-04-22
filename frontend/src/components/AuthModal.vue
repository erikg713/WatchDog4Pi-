<template>
  <div v-if="show" class="modal">
    <h2>Login with Pi Network</h2>
    <button @click="login">Login</button>
    <button @click="$emit('close')">Cancel</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { authenticatePi } from '@/utils/pi.js'

const props = defineProps({ show: Boolean })
const emit = defineEmits(['close', 'success'])

function login() {
  authenticatePi(
    user => emit('success', user),
    err => alert('Auth failed: ' + err.message)
  )
}
</script>


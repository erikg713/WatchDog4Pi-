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

<!-- frontend/src/components/AuthModal.vue --><template>
  <div class="p-6 bg-white rounded-xl shadow-lg w-full max-w-md mx-auto">
    <button
      @click="loginWithPi"
      class="bg-purple-600 text-white px-4 py-2 rounded-xl w-full"
    >
      Login with Pi Network
    </button>
  </div>
</template><script setup>
import { initPiLogin } from '@/utils/pi';
import { useUserStore } from '@/store/user';
import axios from 'axios';

const userStore = useUserStore();

const loginWithPi = async () => {
  try {
    const auth = await initPiLogin();

    userStore.setUser({
      uid: auth.user.uid,
      username: auth.user.username,
      accessToken: auth.accessToken,
    });

    const res = await axios.post('/api/auth/verify', {
      accessToken: auth.accessToken,
      uid: auth.user.uid,
    });

    if (res.data.user) {
      userStore.setVerified(true);
    }
  } catch (err) {
    alert('Login failed: ' + err.message);
  }
};
</script><style scoped>
button {
  font-weight: 600;
}
</style>
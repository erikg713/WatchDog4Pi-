<template>
  <div class="min-h-screen bg-gray-950 text-white px-6 py-8">
    <h1 class="text-3xl font-bold mb-4">Welcome to PiGuard</h1>
    
    <div v-if="loading" class="text-lg text-yellow-400">Loading transactions...</div>

    <div v-else class="space-y-4">
      <div v-if="flagged.length">
        <h2 class="text-2xl text-red-500 font-semibold">Flagged Transactions</h2>
        <ul class="border-l-4 border-red-500 pl-4 space-y-2">
          <li v-for="tx in flagged" :key="tx._id" class="bg-gray-800 p-3 rounded">
            <p><strong>Amount:</strong> {{ tx.amount }} Pi</p>
            <p><strong>Vendor:</strong> {{ tx.vendor }}</p>
            <p><strong>Date:</strong> {{ new Date(tx.date).toLocaleString() }}</p>
          </li>
        </ul>
      </div>

      <div v-else class="text-green-400 text-lg">No suspicious activity detected!</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const flagged = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:5000/api/fraud/check');
    const data = await res.json();
    flagged.value = data.flagged || [];
  } catch (err) {
    console.error('Error fetching flagged data:', err);
  } finally {
    loading.value = false;
  }
});
</script>

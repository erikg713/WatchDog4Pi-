<template>
  <div class="card">
    <h3>Transaction #{{ transaction._id }}</h3>
    <p>Amount: {{ transaction.amount }} Pi</p>
    <p>Status: {{ transaction.status }}</p>
    <p>Memo: {{ transaction.memo }}</p>
  </div>
</template>

<script setup>
defineProps({ transaction: Object })
</script>


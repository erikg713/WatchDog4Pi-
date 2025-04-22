<template>
  <div v-if="alert" class="alert alert-warning">
    <strong>Fraud Detected:</strong> {{ alert.message }}
  </div>
</template>

<script setup>
defineProps({ alert: Object })
</script>


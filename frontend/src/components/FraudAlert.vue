<template>
  <div v-if="alert" class="alert alert-warning">
    <strong>Fraud Detected:</strong> {{ alert.message }}
  </div>
</template>

<script setup>
defineProps({ alert: Object })
</script>
<template>
  <div v-if="flagged" class="bg-red-100 p-3 text-red-800 rounded">
    🚨 Warning: {{ reasons.join(', ') }}
  </div>
</template>

<script setup>
defineProps({ flagged: Boolean, reasons: Array });
</script>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <label class="text-black" :for="label">{{ label }}</label>
    <input :type="type" :placeholder="label" class="form-control">
  </div>
</template>

<style scoped></style>

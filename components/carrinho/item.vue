<script setup lang="ts">
defineProps({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <div class="d-flex w-100 justify-content-between align-items-center">
        <h4 class="text-black">{{ name }}</h4>
        <button class="btn btn-outline-danger"><i class="bi bi-x-circle"></i></button>
    </div>
</template>
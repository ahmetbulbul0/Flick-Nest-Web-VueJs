<template>
    <div class="min-h-screen flex justify-center items-center bg-primary-50">
        <div class="p-5 shadow-2 border-round w-full">
            <div class="text-center mb-5">
                <img src="../assets/logo.svg" alt="Logo" class="mx-auto h-24 w-auto mb-3" />
                <div class="text-900 text-3xl font-medium mb-3">Flick Nest</div>
                <span class="text-600 font-medium">{{ title }}</span>
            </div>

            <div class="w-full flex justify-center items-center">
                <slot></slot>
            </div>

            <div class="text-center mt-5">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
})
</script>

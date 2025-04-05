<template>
    <div class="w-full min-h-screen flex justify-center items-center">
        <div class="p-5 shadow-2 rounded-md w-full max-w-lg bg-zinc-900 space-y-5">
            <div class="text-center">
                <img src="../assets/logo.svg" alt="Logo" class="mx-auto h-24 w-auto mb-3" />
                <div class="text-900 text-3xl font-medium mb-3">{{ title }}</div>
                <!-- <span class="text-600 font-medium">{{ title }}</span> -->
            </div>

            <div class="w-full flex justify-center items-center">
                <slot></slot>
            </div>

            <div class="text-center">
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

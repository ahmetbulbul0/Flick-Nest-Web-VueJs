<template>
    <AuthLayout title="Forgot Password">
        <form v-if="true" class="flex flex-col gap-4 justify-center items-center w-full">
            <FloatLabel variant="on">
                <InputText id="emailInput" type="email" class="w-full" />
                <label for="emailInput">E-posta</label>
            </FloatLabel>

            <Button label="Send Reset Password Mail" class="w-full" />
        </form>
        
        <div v-else class="text-center">
            <i class="pi pi-check-circle text-5xl text-green-500 mb-4"></i>
            <h2 class="text-900 text-xl font-medium mb-2">E-posta Gönderildi</h2>
            <p class="text-600 mb-4">
                Şifre sıfırlama bağlantısı e-posta adresinize gönderildi. Lütfen gelen kutunuzu
                kontrol edin.
            </p>
            <Button label="Back to Login Page" variant="link" size="small" />
        </div>

        <template #footer>
            <div class="w-full text-center">
                <Button label="Back to Login Page" variant="link" size="small" />
            </div>
        </template>
    </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Button from 'primevue/button'
</script>

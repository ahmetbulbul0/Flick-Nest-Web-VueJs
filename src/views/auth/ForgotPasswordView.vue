<template>
    <AuthLayout title="Forgot Password">
        <div v-if="true" class="flex flex-col gap-4 justify-center items-center w-full max-w-xs">
            <div class="text-600 text-center">
                E-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderelim.
            </div>

            <form class="w-full">
                <div class="mb-4">
                    <FloatLabel variant="on">
                        <InputText id="emailInput" type="email" class="w-full" />
                        <label for="emailInput">E-posta</label>
                    </FloatLabel>
                    <small class="p-error block mt-2"> error message </small>
                </div>

                <Button type="submit" label="Şifre Sıfırlama Bağlantısı Gönder" class="w-full" />
            </form>
        </div>

        <div v-else class="text-center">
            <i class="pi pi-check-circle text-5xl text-green-500 mb-4"></i>
            <h2 class="text-900 text-xl font-medium mb-2">E-posta Gönderildi</h2>
            <p class="text-600 mb-4">
                Şifre sıfırlama bağlantısı e-posta adresinize gönderildi. Lütfen gelen kutunuzu
                kontrol edin.
            </p>
            <Button label="Giriş Sayfasına Dön" class="p-button-outlined" />
        </div>

        <template #footer>
            <div class="text-600">
                <RouterLink to="/auth/login" class="text-primary font-medium">
                    Giriş sayfasına dön
                </RouterLink>
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

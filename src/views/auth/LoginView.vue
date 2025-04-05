<template>
    <AuthLayout title="Login">
        <form class="flex flex-col gap-4 justify-center items-center w-full">
            <FloatLabel variant="on">
                <InputText id="usernameInput" />
                <label for="usernameInput">Username</label>
            </FloatLabel>

            <FloatLabel variant="on">
                <Password inputId="passwordInput" :feedback="false" toggleMask />
                <label for="passwordInput">Password</label>
            </FloatLabel>

            <div class="w-full flex justify-between items-center">
                <div class="flex gap-2 justify-start items-center">
                    <Checkbox :binary="true" inputId="rememberMe" size="small" />
                    <label for="rememberMe" class="cursor-pointer text-sm">Remember Me</label>
                </div>

                <Button label="Forgot Password" variant="link" />
            </div>

            <Button label="Login" class="w-full" />
        </form>

        <template #footer>
            <div class="w-full flex justify-center items-center">
                <span class="text-sm">
                    If you don't have account?
                    <Button label="Register" variant="link" size="small" class="!p-0 !border-0" />
                </span>
            </div>
        </template>
    </AuthLayout>
</template>

<script setup>
import InputText from 'primevue/inputtext'
import AuthLayout from '@/layouts/AuthLayout.vue'
import FloatLabel from 'primevue/floatlabel'
import Password from 'primevue/password'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
</script>

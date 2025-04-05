<template>
    <AuthLayout title="Register to Flick Nest">
        <form class="flex flex-col gap-4 justify-center items-center w-full max-w-lg">
            <div class="w-full flex justify-between gap-4">
                <FloatLabel variant="on">
                    <InputText id="firstNameInput" />
                    <label for="firstNameInput">First Name</label>
                </FloatLabel>

                <FloatLabel variant="on">
                    <InputText id="lastNameInput" />
                    <label for="lastNameInput">Last Name</label>
                </FloatLabel>
            </div>

            <FloatLabel variant="on">
                <InputText id="usernameInput" />
                <label for="usernameInput">Username</label>
            </FloatLabel>

            <FloatLabel variant="on">
                <InputText id="emailInput" type="email" />
                <label for="emailInput">Email</label>
            </FloatLabel>

            <div class="w-full flex justify-between gap-4">
                <FloatLabel variant="on">
                    <Password inputId="passwordInput" toggleMask />
                    <label for="passwordInput">Password</label>
                </FloatLabel>

                <FloatLabel variant="on">
                    <Password inputId="passwordConfirmationInput" toggleMask />
                    <label for="passwordConfirmationInput">Password Confirmation</label>
                </FloatLabel>
            </div>

            <div class="w-full flex justify-between items-center">
                <div class="flex gap-2 justify-start items-center">
                    <Checkbox :binary="true" inputId="acceptTermsAndPrivacyPolicy" size="small" />
                    <label for="acceptTermsAndPrivacyPolicy" class="cursor-pointer text-sm">
                        Accept the terms of use and privacy policy
                    </label>
                </div>
            </div>

            <Button label="Register" class="w-full" />
        </form>

        <template #footer>
            <div class="w-full flex justify-center items-center">
                <span class="text-sm">
                    If you have account already?
                    <Button label="Login" variant="link" size="small" class="!p-0 !border-0" />
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

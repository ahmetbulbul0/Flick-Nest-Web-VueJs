import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const Noir = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
            950: '#450a0a',
        },
        colorScheme: {
            light: {
                primary: {
                    color: '#991b1b',
                    inverseColor: '#ffffff',
                    hoverColor: '#7f1d1d',
                    activeColor: '#b91c1c',
                },
                highlight: {
                    background: '#991b1b',
                    focusBackground: '#b91c1c',
                    color: '#ffffff',
                    focusColor: '#ffffff',
                },
            },
            dark: {
                primary: {
                    color: '#ef4444',
                    inverseColor: '#450a0a',
                    hoverColor: '#fecaca',
                    activeColor: '#fee2e2',
                },
                highlight: {
                    background: 'rgba(239, 68, 68, 0.16)',
                    focusBackground: 'rgba(239, 68, 68, 0.24)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)',
                },
            },
        },
    },
})

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Noir,
    },
})

app.mount('#app')

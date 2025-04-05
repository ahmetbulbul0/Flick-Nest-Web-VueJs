import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/auth',
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('@/views/auth/LoginView.vue'),
                },
                {
                    path: 'register',
                    name: 'register',
                    component: () => import('@/views/auth/RegisterView.vue'),
                },
            ],
        },
        {
            path: '/',
            redirect: '/auth/login',
        },
    ],
})

export default router

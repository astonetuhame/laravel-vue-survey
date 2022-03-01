import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login

    },
    {
        path: '/register',
        name: 'Register',
        component: Register

    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard

    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
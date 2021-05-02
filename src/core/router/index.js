import { createRouter, createWebHistory } from 'vue-router'
import Home from '../../views/Home/Home.vue'
import NotFound from '../../views/NotFound/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/page/HomePage.vue'
import MessagePage from "@/page/MessagePage.vue";
import LoginPage from "@/page/LoginPage.vue";
import RegisterPage from "@/page/RegisterPage.vue";
import ProfilePage from "@/page/ProfilePage.vue";
import SearchResultPage from "@/page/SearchResultPage.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/message/:id',
        name: 'Message',
        component: MessagePage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/register',
        component: RegisterPage
    },
    {
        path: '/profile/:id?',
        component: ProfilePage
    },
    {
        path:"/search",
        component: SearchResultPage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})



export default router

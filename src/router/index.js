import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bio',
      name: 'bio',
      component: () => import('../views/BioView.vue')
    },
    {
      path: '/blog-listing',
      name: 'blog-listing',
      component: () => import('../views/BlogListingView.vue')
    },
    {
      path: '/othello',
      name: 'othello',
      component: () => import('../views/OthelloView.vue')
    },
    {
      path: '/post/:slug',
      name: 'post',
      component: () => import('../components/BlogPostSingle.vue')
  },
  ]
})

export default router

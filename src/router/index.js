import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue"
import NotFound from "@/views/NotFound.vue"


const routes = [
  {
    path: '/',
    name: 'contactBook',
    component: ContactBook
  },
  {
    path:'/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
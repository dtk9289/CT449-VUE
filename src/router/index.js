import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue"
import NotFound from "@/views/NotFound.vue"
import ContactEdit from '@/views/ContactEdit.vue'
import ContactAdd from '@/views/ContactAdd.vue'

const routes = [
  {
    path: '/',
    name: 'contactBook',
    component: ContactBook
  },
  {
    path: '/contacts/:id',
    name: 'contact.edit',
    component: ContactEdit,
    props: true
  },
  {
    path: '/contacts/add',
    name: 'contact.add',
    component: ContactAdd,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
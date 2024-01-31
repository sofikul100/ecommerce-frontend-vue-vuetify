import {createRouter,createWebHistory} from "vue-router"


const routes = [
     {
        path:'/',
        name:'Home',
        component: () => import('../views/home/Home.vue'),
     },
     {
      path:'/cart',
      name:'Cart',
      component: () => import('../views/cart/Cart.vue'),
   }
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
      return { top: 0 }
    },
    routes,
});


export default router;
  
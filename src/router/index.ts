import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dad-jks",
      name: "Dad Jokes",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/DadJokeView.vue"),
    },
    {
      path: "/foaas",
      name: "F-Off",
      component: () => import("@/views/FOAASView.vue"),
    },
    {
      path: "/geek-jks",
      name: "Geek Jokes",
      component: () => import("@/views/GeekJokeView.vue"),
    },
    {
      path: "/favourites",
      name: "Favourites",
      component: () => import("@/views/FavouritesView.vue"),
    },
  ],
});

export default router;

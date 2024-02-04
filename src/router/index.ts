import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostCreateView from "@/views/posts/PostCreateView.vue";
import PostDetailView from "@/views/posts/PostDetailView.vue";
import PostEditView from "@/views/posts/PostEditView.vue";
import PostListView from "@/views/posts/PostListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/posts",
      name: "PostList",
      component: PostListView,
    },
    {
      path: "/posts/create",
      name: "PostCreate",
      component: PostCreateView,
    },
    {
      path: "/posts/:id",
      name: "PostDetail",
      component: PostDetailView,
    },
    {
      path: "/posts/:id/edit",
      name: "PostEdit",
      component: PostEditView,
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import EditItem from "@/views/EditItem.vue";
import AddItem from "@/views/AddItem.vue";
import BucketHome from "@/views/BucketHome.vue";
import SingleItem from "@/views/SingleItem.vue";

const routes = [
  { path: "/auth/login", component: LoginView },
  { path: "/auth/register", component: RegisterView },
  { path: "/edititem", component: EditItem },
  { path: "/additem", component: AddItem },
  { path: "/buckethome", component: BucketHome },
  { path: "/singleitem", component: SingleItem },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

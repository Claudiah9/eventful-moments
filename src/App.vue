
<script setup>
import { RouterView, useRoute, useRouter } from "vue-router";
import { ref, onMounted, watchEffect } from "vue";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();
const router = useRouter();
const user = ref(null);

// Check authentication on app load
onMounted(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    user.value = JSON.parse(storedUser);
  } else if (!route.path.includes("/auth")) {
    router.push("/auth/login"); // Redirect only if NOT on auth pages
  }
});

// Watch for authentication changes
watchEffect(() => {
  if (!user.value && !route.path.includes("/auth")) {
    router.push("/auth/login"); // Prevent redirect on login/register
  }
});
</script>

<template>
  <Nav  /> 
  <main> <RouterView /> </main>
  <Footer  />
</template>


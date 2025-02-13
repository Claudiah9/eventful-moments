<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const isAuthenticated = ref(false); // Simulating authentication state
const isSmallMenuOpened = ref(false);
const router = useRouter();

const toggleOpen = () => {
  isSmallMenuOpened.value = !isSmallMenuOpened.value;
};

const logout = () => {
  isAuthenticated.value = false; // Simulate log out
  router.push("/auth/login"); // Redirect to login page
};
</script>

<template>
  <header class="bg-primary sticky top-0 w-full text-white py-4 px-4 sm:px-8 flex items-center justify-between">
    <RouterLink to="/" class="italic !bg-transparent !font-semibold">
      Eventful Moments
    </RouterLink>

    <!-- Desktop Navigation -->
    <nav class="hidden min-[498px]:flex gap-6 items-center">
      <template v-if="!isAuthenticated">
        <RouterLink to="/auth/login">Login</RouterLink>
        <RouterLink to="/auth/register">Register</RouterLink>
      </template>
      <template v-else>
        <RouterLink to="/add">My Buckets</RouterLink>
        <button @click="logout" class="px-4 py-1 bg-red-500 rounded-md hover:bg-red-600">
          Log out
        </button>
      </template>
    </nav>

    <!-- Mobile Menu Button -->
    <button
      @click="toggleOpen"
      class="size-5 cursor-pointer relative flex flex-col min-[498px]:hidden z-20 items-center gap-1"
    >
      <span class="w-5 h-0.5 bg-white transition-transform duration-300" :class="{ 'rotate-45 translate-y-1.5': isSmallMenuOpened }"></span>
      <span class="w-5 h-0.5 bg-white transition-opacity duration-300" :class="{ 'opacity-0': isSmallMenuOpened }"></span>
      <span class="w-5 h-0.5 bg-white transition-transform duration-300" :class="{ '-rotate-45 -translate-y-1.5': isSmallMenuOpened }"></span>
    </button>

    <!-- Mobile Navigation -->
    <nav
      class="absolute right-0 bg-primary text-white rounded-bl-md p-2 flex flex-col gap-2 min-[498px]:hidden transition-all duration-300"
      :class="isSmallMenuOpened ? 'top-[100%] z-10' : 'top-0 opacity-0 pointer-events-none'"
    >
      <template v-if="!isAuthenticated">
        <RouterLink to="/auth/login" class="px-4 py-1 w-full rounded-md hover:bg-black/20">Login</RouterLink>
        <RouterLink to="/auth/register" class="px-4 py-1 w-full rounded-md hover:bg-black/20">Register</RouterLink>
      </template>
      <template v-else>
        <RouterLink to="/add" class="px-4 py-1 w-full rounded-md hover:bg-black/20">My Buckets</RouterLink>
        <button @click="logout" class="px-4 py-1 w-full bg-red-500 rounded-md hover:bg-red-600">Log out</button>
      </template>
    </nav>
  </header>
</template>


 
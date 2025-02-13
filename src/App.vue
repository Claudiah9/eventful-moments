<script setup>
import { RouterView, useRoute, useRouter } from "vue-router";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();
const router = useRouter();

</script>

<template>
  <Nav />
  <main> <RouterView /> </main>
  
  <Footer />
</template>

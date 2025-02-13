<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";

// Vue Router
const router = useRouter();

// Initialize form validation
const { handleSubmit } = useForm();
const fullname = useField("fullname");
const email = useField("email");
const password = useField("password");

// Function to handle form submission
const onSubmit = handleSubmit((values) => {
  console.log("User Registered:", values);
  alert(`Welcome ${values.fullname}, your account has been created.`);
  router.push({ name: "home" });
});
console.log(email);
</script>

<template>
  <div class="w-full min-h-[calc(100vh-10rem)] flex items-center justify-center bg-white">
    <div class="w-full text-black p-2 max-w-md flex justify-center flex-col gap-8">
      <h1 class="text-3xl">Create an account</h1>
      <form @submit.prevent="onSubmit" class="flex flex-col gap-5 items-center">
        <label for="fullname" class="w-full flex flex-col gap-2">
          <span class="text-sm">Fullname</span>
          <input
            v-model="fullname.value.value"
            required
            minlength="2"
            class="w-full p-2 border-2 border-accent rounded-md"
            type="text"
            id="fullname"
          />
        </label>

        <label for="email" class="w-full flex flex-col gap-2">
          <span class="text-sm">Email</span>
          <input
            v-model="email.value.value"
            required
            class="w-full p-2 border-2 border-accent rounded-md"
            type="email"
            id="email"
          />
        </label>

        <label for="password" class="w-full flex flex-col gap-2">
          <span class="text-sm">Password</span>
          <input
            v-model="password.value.value"
            required
            minlength="8"
            class="w-full p-2 border-2 border-accent rounded-md"
            type="password"
            id="password"
          />
        </label>

        <button
          type="submit"
          class="min-w-48 py-3 rounded-xl text-white px-2 bg-tertiary border-accent border-[1px]"
        >
          Create
        </button>
      </form>
    </div>
  </div>
</template>


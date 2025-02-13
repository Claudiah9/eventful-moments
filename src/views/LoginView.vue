<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";

const router = useRouter();

// Initialize form validation
const { handleSubmit } = useForm();
const email = useField("email");
const password = useField("password");

const onSubmit = handleSubmit((values) => {
  // Simulated login logic (replace this with your actual authentication logic)
  if (values.email === "test@example.com" && values.password === "password123") {
    alert(`Welcome back, ${values.email}`);
    router.push("/");
  } else {
    alert("Invalid email or password");
  }
});
</script>

<template>
  <div class="w-full min-h-[calc(100vh-10rem)] flex items-center justify-center bg-white">
    <div class="w-full text-black p-2 max-w-md flex justify-center flex-col gap-3">
      <h1 class="text-3xl">Welcome back,</h1>
      <p>
        Hi, my name is Eventful Moments, I am a bucket… no, not the bucket of
        water but I store awesome moments you will like to have in coming years.
      </p>
      <form @submit.prevent="onSubmit" class="flex flex-col gap-5 items-center">
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
            class="w-full p-2 border-2 border-accent rounded-md"
            type="password"
            id="password"
          />
        </label>
        <button
          type="submit"
          class="min-w-48 py-3 rounded-xl text-white px-2 bg-tertiary border-accent border-[1px]"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>


<!--<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";

const router = useRouter();

// Form validation using vee-validate
const { handleSubmit } = useForm();
const email = useField("email");
const password = useField("password");

const onSubmit = handleSubmit((values) => {
  if (!values.email || !values.password) {
    alert("Both fields are required.");
    return;
  }

  // Simulate login (Replace with actual API call)
  if (values.email === "test@example.com" && values.password === "password") {
    alert("Login successful!");
    router.push("/");
  } else {
    alert("Invalid email or password.");
  }
});
</script>

<template>
  <div class="flex items-center min-h-screen justify-center bg-gray-100">
    <div class="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
      <h2 class="text-2xl font-bold text-center text-gray-700">Welcome back,</h2>
      <p class="text-gray-700">
        Hi, my name is Eventful Moments, I am a bucket… no, not the bucket of water, 
        but I store awesome moments you will like to have in coming years.
      </p>
      <br>

      <form @submit.prevent="onSubmit" class="space-y-4">
        <label class="block text-gray-700">Email</label>
        <input
          v-model="email.value"
          type="email"
          placeholder="Email"
          required
          class="w-full p-3 border rounded"
        />

        <label class="block text-gray-700">Password</label>
        <input
          v-model="password.value"
          type="password"
          placeholder="Password"
          required
          class="w-full p-3 border rounded"
        />

        <button 
          type="submit" 
          class="min-w-48 py-3 rounded-xl text-white px-2 bg-tertiary items-center justify-center border-accent border-[1px]"
        >
          Login
        </button>
      </form>

    </div>
  </div>
</template> -->



     

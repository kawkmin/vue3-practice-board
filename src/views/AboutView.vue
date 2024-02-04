<template>
  <div>
    <h2>About View</h2>
    <p>현재 router = "{{ $route.path }}"</p>
    <button class="btn btn-primary" @click="$router.push('/')">
      Home으로 이동
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();

console.log(route.path);
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

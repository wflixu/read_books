<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <nav>
    <RouterLink class="item" to="/">Home</RouterLink>
    <RouterLink class="item" to="/about">About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
  
   


</template>

<style scoped>

  nav {
    border: 1px solid;
    
  }
  .item {
    display: block;
  }

</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import mediaChecker from './scripts/mediaChecker'
import hamburgerController from './scripts/hamburgerController'
  
onMounted(() => {
  mediaChecker.showBody()
  hamburgerController.hamburgerFix()
})

</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>
  <main>
      <RouterView />
  </main>
</template>

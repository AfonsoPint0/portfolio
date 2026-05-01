<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import ThemeToggle from "./ThemeToggle.vue";
  
  const hasScrolled = ref(false)

let listener: EventListener

onMounted(() => {
  listener = () => {
    hasScrolled.value = window.scrollY > 0
  }

  window.addEventListener('scroll', listener)

  // set initial state (important)
  hasScrolled.value = window.scrollY > 0
})

onUnmounted(() => {
  window.removeEventListener('scroll', listener)
})
</script>

<template>
  <nav>
    <div class="p-7 max-w-5xl absolute w-full flex justify-between">
        <div class="text-2xl">
            <a>Afonso Pinto</a>
        </div>
        <ThemeToggle />
    </div>
    <div v-show="!hasScrolled" class="fixed bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </div>
  </nav>
</template>

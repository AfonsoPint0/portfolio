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
    <div class="absolute p-7 pt-9 md:p-9 max-w-7xl w-full flex justify-between">
        <div class="text-2xl md:text-5xl">
            <a>Afonso Pinto</a>
        </div>
        <ThemeToggle />
    </div>
    <div v-show="!hasScrolled" class="fixed bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 md:w-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </div>
  </nav>
</template>

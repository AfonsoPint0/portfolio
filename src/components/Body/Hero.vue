<script setup>
import { ref, onMounted } from 'vue'

const words = ['Frontend', 'Backend', 'Full-Stack']
const staticText = 'This is '

const displayedWord = ref('')
const highlight = ref(false)

let wordIndex = 0
let charIndex = 0

function loop() {
  const word = words[wordIndex]

  displayedWord.value = word.substring(0, charIndex++)
  
  if (charIndex > word.length) {

    // stop at last word
    if (wordIndex === words.length - 1) {
      displayedWord.value = word
      highlight.value = false
      return
    }

    highlight.value = true

    setTimeout(() => {
      highlight.value = false
      wordIndex++
      charIndex = 0
      displayedWord.value = ''
      setTimeout(loop, 200)
    }, 200)

    return
  }

  setTimeout(loop, 200)
}

onMounted(loop)
</script>

<template>
  <div class="h-screen p-2 flex items-center justify-center">
    <div class="inline-block align-bottom">
      <div class="text-3xl md:py-1 py-2"><span :class="highlight ? 'bg-zinc-400 text-white' : ''">{{ displayedWord }}</span> Developer</div>
      <div class="text-xl md:py-1 py-2">Currently working as a Software Engineer at Capgemini</div>
    </div>
  </div>
</template>

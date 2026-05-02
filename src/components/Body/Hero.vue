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
  <div class="h-screen flex items-center">
    <div class="inline-block align-bottom">
      <div class="pb-2 md:pb-4 text-3xl md:text-5xl"><span :class="highlight ? 'bg-zinc-400 text-white' : ''">{{ displayedWord }}</span> Developer</div>
      <div class="text-xl md:text-2xl">Currently working as a Software Developer at VTXRM</div>
    </div>
  </div>
</template>

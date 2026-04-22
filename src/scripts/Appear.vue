<template>
  <div
    ref="elementRef"
    class="transition-all duration-1000"
    :class="[
      isVisible ? 'opacity-100 blur-none' : 'opacity-0 blur-sm',
      delay ? 'delay-200' : ''
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  const props = defineProps({
    delay: {
      type: Boolean,
      default: false
    }
  })

  const isVisible = ref(false)
  const elementRef = ref(null)

  let observer

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    })

    if (elementRef.value) observer.observe(elementRef.value)
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })
</script>

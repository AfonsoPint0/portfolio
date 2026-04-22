<template>
  <div class="overflow-hidden">
    <div
      ref="elementRef"
      class="transition duration-1000 delay-350"
      :class="[
        isVisible ? 'translate-x-0 blur-none' : baseHiddenClass
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

  const props = defineProps({
    invert: {
      type: Boolean,
      default: false
    }
  })

  const isVisible = ref(false)
  const elementRef = ref(null)

  const baseHiddenClass = computed(() =>
    props.invert
      ? '-translate-x-full blur-sm'
      : 'translate-x-full blur-sm'
  )

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

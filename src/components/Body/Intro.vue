<script setup>
  import Appear from '../../scripts/Appear.vue'
  import img from '../../assets/profilepic.JPG'
</script>

<template>
  <Appear :delay="true">
    <div class="pb-10">
      <div class="pb-5 md:pb-10 text-3xl md:text-5xl flex justify-center">Short introduction</div>
      <div class="pb-5 flex justify-center">
        <img :src="img" class="rounded-lg  h-40 object-center" alt="Description" />
      </div>
      <div class="md:text-2xl">
        <div>
          Currently living in Portugal, started coding at 16 and haven't stopped since. I've always had a keen interest in understanding how things work, so when the time to choose my career path came, I had two options in mind: mechanics or software development. Here I am, a couple of years later, and I can confidently say that I made the right choice.
        </div>
        <div>
          Since I started working as a software developer in 2021, I've had the opportunity to work on various challenging projects, each presenting its own unique set of obstacles. Throughout, I've remained committed to delivering my best while continuously enhancing my skills.
        </div>
        <div class="pt-5 md:pt-10">
          <div class="pb-1 flex justify-center">
            My main stack:
          </div>
          <div class="pl-4 flex justify-center">
            <div class="md:text-1xl"> C# | .NET | JS | SQL | CSS</div>                    
          </div>  
        </div>
      </div>
    </div>
  </Appear>
</template>

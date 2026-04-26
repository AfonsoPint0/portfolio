<script setup>
  import Appear from '../../scripts/Appear.vue'
  import img from '../../assets/profilepic.JPG'
</script>

<template>
  <Appear :delay="true">
    <div class="pb-10">
      <div class="text-3xl flex justify-center pb-8">Short introduction</div>
      <div class="text-3xl flex justify-center pb-2">
        <img :src="img" class="rounded-lg  h-40 object-center" alt="Description" />
      </div>
      <div class="p-2">
        Currently living in Portugal, started coding at 16 and haven't stopped since. I've always had a keen interest in understanding how things work, so when the time to choose my career path came, I had two options in mind: mechanics or software development. Here I am, a couple of years later, and I can confidently say that I made the right choice.
      </div>
      <div class="p-2">
        Since I started working as a software developer in 2021, I've had the opportunity to work on various challenging projects, each presenting its own unique set of obstacles. Throughout, I've remained committed to delivering my best while continuously enhancing my skills.
      </div>
      <div class="p-3">
        <div class="pb-1 flex justify-center">
          My main stack:
        </div>
        <div class="pl-4 flex justify-center">
          <div class="text-base"> C# | .NET | JS | SQL | CSS</div>                    
        </div>  
      </div>
    </div>
  </Appear>
</template>

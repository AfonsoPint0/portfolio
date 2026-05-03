<script setup>
  import Appear from '../../scripts/Appear.vue'
  import img from '../../assets/profilepic.JPG'
</script>

<template>
  <Appear :delay="true">
    <div class="pb-10 md:pb-15">
      <div class="pb-8 text-3xl md:text-5xl flex justify-center">Short introduction</div>
      <div class="pb-5 flex justify-center">
        <img :src="img" class="rounded-lg  h-40 object-center" alt="Description" />
      </div>
      <div class="md:text-2xl">
        <div>
          My first contact with a computer was at age 6, and since then I’ve been engaged with technology continuously.
          I’ve always enjoyed tinkering and experimenting with how things work. 
        </div>
        <div class="pt-2">
          I Started coding at 16, with prior experience in video game modding.
          As a kid, I didn’t have much access to the latest hardware, so I often had to find creative ways to run newer games.
        </div>
        <div class="pt-2">
          Since 2021, I have been professionally engaged in the IT sector, mainly as a full-stack developer. Over the years, I have worked across areas ranging from UX/UI design to full-stack development.
        </div>
        <div class="pt-5 md:pt-10">
          <div class="pb-1 flex justify-center">
            My main stack:
          </div>
          <div class="pl-4 flex justify-center">
            <div class="md:text-1xl">C# | .NET | JS | SQL | CSS</div>                    
          </div>  
        </div>
      </div>
    </div>
  </Appear>
</template>

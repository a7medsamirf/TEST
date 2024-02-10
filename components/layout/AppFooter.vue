<script setup>
const SocialData = ref([
  {
    image: "instagram",
    label: "instagram",
  },
  {
    image: "twitter",
    label: "twitter",
  },
  {
    image: "linkedin",
    label: "linkedin",
  },
]);
</script>

<template>

  <div class="bg-white pt-4 sm:pt-10 lg:pt-12 dark:bg-dark">
    <footer class="container mx-auto relative px-2 sm:px-0">

    <div class="mb-16 grid grid-cols-12 gap-2 pt-10 lg:gap-10 lg:pt-12">

      <div class="col-span-12 md:col-span-6 lg:col-span-4 mb-5">
        <!-- logo - start -->
        <div class="mb-4 lg:-mt-2">
          <a href="/" class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
          
            <img v-if="dark" src="/LogoFull.png" class="flex-none" alt="" />
            
            <img v-else src="/Logo-Full-Black.svg" class="flex-none" alt="" />
          </a>
        </div>
        <!-- logo - end -->

        <p class="mb-6 text-base text-[#757575] dark:text-white leading-7"> {{ $t("common.Lorem-text") }}</p>
    <!-- Social Brands -->
    <div class="md:text-end flex gap-3">
          
          <NuxtLink
          v-for="(social, index) in SocialData" :key="index"
            target="_blank"
            class="h-10 w-10 mx-1 cursor-pointer inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-[#EAEAEA] dark:border-slate-800 rounded-md hover:border-primary-color dark:hover:border-[#f59e20]
             hover:bg-primary-color dark:hover:bg-primary-color "
          >
          <img class="w-5" :src="`/img/svg/${social.image}.svg`"/>
      <!--       <img class="opacity-70" :src="require(`/img/svg/${social.image}`)" /> -->
          </NuxtLink>

        <!-- End Social Brands -->
      </div>

   
      </div>

      <!-- nav - start -->
      <div class="col-span-12 md:col-span-6 lg:col-span-3 relative mb-5">
        <div class="relative z-10 inline-block mb-4 text-lg font-bold uppercase text-custom-color dark:text-white after:absolute after:-bottom-2 after:right-0 after:left-0 after:-z-10 after:h-1 after:w-[30px] after:bg-[#f59e20] after:content-['']">
          {{ $t("Footer.MainMenu") }}
        </div>



        <nav class="flex flex-col gap-4 mt-4">
          <div>
            <a href="#" class="text-gray-600 dark:text-white transition duration-100 hover:text-custom-color">   {{ $t("Footer.Advertising") }}</a>
          </div>

          <div>
            <a href="#" class="text-gray-600 dark:text-white transition duration-100 hover:text-custom-color"> {{ $t("Footer.Terms") }}</a>
          </div>

          <div>
            <a href="#" class="text-gray-600 dark:text-white transition duration-100 hover:text-custom-color"> {{ $t("Footer.Authority") }}</a>
          </div>

          <div>
            <a href="#" class="text-gray-600 dark:text-white transition duration-100 hover:text-custom-color">{{ $t("Footer.Connectus") }}</a>
          </div>
        </nav>
      </div>
      <!-- nav - end -->

      <!-- nav - start -->
      <div class="col-span-12 md:col-span-6 lg:col-span-2 mb-5">
        <div class="relative z-10 inline-block mb-4 text-lg font-bold uppercase text-custom-color dark:text-white after:absolute after:-bottom-2 after:right-0 after:left-0 after:-z-10 after:h-1 after:w-[30px] after:bg-[#f59e20] after:content-['']">
          {{ $t("Footer.sections") }}
        </div>
    

        <nav class="flex flex-col gap-4 mt-4">
          <div>
            <a href="#" class="text-gray-600 dark:text-white transition duration-100 hover:text-custom-color">{{ $t("Footer.Support") }}</a>
          </div>

          <div>
            <a href="#" class="text-gray-600 dark:text-white transition duration-100 hover:text-custom-color">{{ $t("Footer.questions") }} </a>
          </div>


        </nav>
      </div>
      <!-- nav - end -->

      <!-- nav - start -->
      <div class="col-span-12 md:col-span-6 lg:col-span-3 mb-5">
        <div class="relative z-10 inline-block mb-4 text-lg font-bold uppercase text-custom-color dark:text-white after:absolute after:-bottom-2 after:right-0 after:left-0 after:-z-10 after:h-1 after:w-[30px] after:bg-[#f59e20] after:content-['']">
          {{ $t("Footer.Connectus") }}
  
        </div>

        <nav class="flex flex-col gap-4 mt-4">
          <div>
            <a href="#" class="text-custom-gray dark:text-white transition duration-100 hover:text-custom-color">
              <Icon name="carbon:location"  class="text-custom-gray dark:text-white w-6" />
           
            {{ $t("Footer.Riyadh") }}
  
            </a>
          </div>

          <div>
            <a href="#" class="text-custom-gray dark:text-white transition duration-100 hover:text-custom-color">
              <Icon name="ph:phone"  class="text-custom-gray dark:text-white w-6" />
            +966 570 212 216
            </a>
          </div>

          <div>
            <a href="#" class="text-custom-gray dark:text-white transition duration-100 hover:text-custom-color">
              <Icon name="fontisto:email"  class="text-custom-gray dark:text-white w-6" />
            info@soum.tech
            </a>
          </div>


        </nav>
      </div>
      <!-- nav - end -->


    </div>

    <div class="border-t border-[#EAEAEA] py-8 text-sm text-[#757575] dark:text-white text-center md:text-start font-semibold">
   
      {{ $t("Footer.reserved") }}
   </div>
  </footer>
</div>



</template>

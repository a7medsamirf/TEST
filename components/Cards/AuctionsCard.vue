<script setup>
const dataloaded = ref(true);
onMounted(() => {
  setTimeout(() => {
    dataloaded.value = false;
  }, 2000);
});
</script>

<template>


        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 lg:mt-10 gap-2">
          <div v-for="index in 8" :key="index" class="rounded-lg relative px-2 md:px-1">

            <div class="items-center gap-5 mb-10"  v-if="dataloaded">
              <div class="space-y-2">
                <USkeleton class="h-[170px] w-[100]" />
                <USkeleton class="h-4 w-[100]" />
                <USkeleton class="h-4 w-[100]" />
                <USkeleton class="h-4 w-[250px]" />    <USkeleton class="h-4 w-[250px]" />
              </div>
            </div>


            <div class="bg-white border border-gray-200 rounded-2xl p-2 dark:bg-dark-card dark:border-dark-border w-auto shadow-[0px_30px_70px_rgba(10,22,37,0.0555514)]"  v-if="!dataloaded">
            <div class="relative ">
              <img class="w-full bg-cover bg-center" :src="`/img/Auctions/Component.png`" alt="Office"/>
              <span class="absolute w-full backdrop-blur-xl text-sm bottom-0 text-white rounded-b-lg px-3 py-2">
                <Icon name="zondicons:location"  class="text-white w-5" />
                {{ $t('Auctions.Street-Dammam') }}

              </span>

            </div>
              <div class="p-3 ">
                <div class="flex items-center justify-between">
                  <a>
                  <h3 class="text-base font-extrabold text-custom-color  dark:text-primary-color">
                    {{ $t('Auctions.CardTitle') }}
                  </h3>
                </a>
                <img class="w-24 bg-cover bg-center" :src="`/img/Auctions/Auctionslogo.png`" alt="Auctionslogo"/>
        </div>

              <div class="flex">
                <img class="w-4 bg-cover bg-center " :src="`/img/Auctions/Icon awesome-ruler-combined.svg`" alt="Auctionslogo"/>
                <p class="mt-2 px-2 text-base font-normal text-custom-color dark:text-gray-400">325.22م²</p>
              </div>
               <div class="timer">
                <Timer />
               </div>
                <div class="flex items-center justify-between">
            <span class="text-base font-extrabold text-custom-color dark:text-white"> 
              {{ $t('Auctions.Number') }}
             
                <span class="text-primary-color block">71</span>
             </span>
            <button  class="text-white font-medium rounded-md text-sm px-6 py-3 text-center bg-primary-color dark:hover:bg-primary-color ">
              {{ $t('Auctions.button') }}
            </button>
        </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="flex justify-center gap-5 p-3 text-center rounded-md my-2   mt-10 sm:mt-14 lg:mt-20">
        
          <button
            class="inline-block rounded-3xl border border-primary-color px-12 py-3 text-sm font-medium text-primary-color
             hover:bg-primary-color hover:text-white active:bg-primary-color transition duration-500">
             {{ $t('Auctions.Allauctions') }}
          </button>

        </div>



</template>

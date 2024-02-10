<template>
  <section class="Auctions md:py-20 relative ">
    <div class="container mx-auto relative px-2 sm:px-0">

    <TabGroup>
    <div class="flex justify-center items-center">
      <TabList class="flex w-full lg:w-2/4 bg-white border border-gray-200 rounded-3xl p-2 dark:bg-dark-card dark:border-dark-border shadow-[0px_30px_70px_rgba(10,22,37,0.0555514)]">
        <Tab
          v-for="item in Object.keys(items)"
          as="template"
          :key="item"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-3xl py-4  text-base leading-5 font-extrabold text-gray-800',
              selected
                ? 'bg-[#DC5224] text-white shadow text-base font-extrabold focus:outline-none'
                : 'text-base font-extrabold text-custom-color dark:text-white  hover:bg-white/[0.12] focus:outline-none',
            ]"
          >
            {{ item }}
          </button>
        </Tab>
      </TabList>
    </div>
      <TabPanels class="mt-2">
        <TabPanel  v-for="(idx) in Object.values(items)" :key="idx">
        
        <AuctionsCard />

        </TabPanel>
      </TabPanels>
    </TabGroup>

</div>

</section>

</template>

<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const items = ref({
  القائمة:[] ,
  القادمة:[] ,
  المنتهي:[] ,
},

)
</script>


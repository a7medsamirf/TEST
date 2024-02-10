<script setup>
const PartnerData = [
  { image: "1" },
  { image: "2" },
  { image: "3" },
  { image: "4" },
  { image: "5" }
];
</script>

<template>
  <section class="Partners py-16 md:py-20 relative">
    <div class="container mx-auto relative px-2 sm:px-0">
      <div class="section-title grid grid-cols-1 pb-10 text-center">
        <!-- text - start -->
        <h3
          class="flex justify-center items-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-white"
        >
        
          {{ $t("partners.SectionTitle") }}
        </h3>
        <!-- text - end -->
      </div>

      <div class="grid md:grid-cols-5 grid-cols-3 justify-center gap-[30px]">
        <div class="mx-auto py-4" v-for="(partner, index) in PartnerData" :key="index">
          <img class="h-auto" 
          :src="`/img/partners/${partner.image}.png`"/>
        </div>
      </div>
    </div>
  </section>
</template>

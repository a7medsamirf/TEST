<script setup lang="ts"></script>
<template>
  <section
    id="hero"
    class="relative md:h-3/6 grid content-center bg-white bg-[url('/img/BGStars.png')] bg-cover bg-center py-36 mx-5 lg:mx-10 mt-40 rounded-3xl"
  >

    <div
      class="py-8 px-4 mx-auto max-w-screen-xl text-center relative z-10 lg:py-16 lg:px-12 self-center"
    >
      <h1
        class="flex justify-center items-center mb-4 text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-white dark:text-white relative"
      >

        {{ $t("Hero.SectionTitle") }}
      </h1>

      <p
        class="mb-8 m-6 text-lg font-medium text-white lg:text-xl sm:px-16 xl:px-48 "
      >
        {{ $t("Hero.SectionSubtitle") }}
      </p>

    </div>
<div class="mx-auto text-center relative z-10  self-center top-36 lg:top-36">
    <div class="backdrop-blur-xl w-auto lg:w-[650px] p-10 py-8 px-4 rounded-2xl gap-4 flex justify-center">
      <img  src="/img/hero/1.png" class="block  w-1/2 lg:w-auto" alt="" />
      <img  src="/img/hero/2.png" class="block  mt-auto lg:mt-5 lg:w-auto" alt="" />

      </div>
    </div>


  </section>
</template>

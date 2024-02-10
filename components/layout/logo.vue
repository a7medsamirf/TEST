<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <div>
    <NuxtLink
      class="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white"
      :to="localePath('/')"
    >
      <img class="w-14 lg:w-24" src="/LogoFull.png" alt="Discover Nuxt 3" />
    </NuxtLink>
  </div>
</template>

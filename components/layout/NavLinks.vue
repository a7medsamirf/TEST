<script setup lang="ts">
const localePath = useLocalePath();
const links = [
  {
    name: "nav.Home",
    to: "/",
  },
  {
    name: "nav.Auctions",
    to: "/Auctions",
  },
  {
    name: "nav.Connectus",
    to: "/Connectus",
  }
];
</script>
<template>
  <div class="px-2 relative" v-for="(link, index) in links" :key="index">
    <NuxtLink
    
      :to="localePath(link.to)"
      class="hover-transition font-bold text-white hover:text-gray-400 dark:text-white dark:hover:text-yellow-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 after:content-[] after:absolute after:inline-block after:h-full after:w-full"
    >
      {{ $t(link.name) }}
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.router-link-active:after{
  content: "";
    position: absolute;
    width: 25px;
    height: 3px;
    top: 25px;
    right: 10px;
    left: 10px;
    z-index: -1;
    background-color: rgb(245, 158, 32);
}

</style>

<script setup>
const { locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <NuxtLink
    class="font-bold font-ARFont flex hover-transition text-white hover:text-gray-400 dark:text-white"
    v-for="locale in availableLocales"
    :key="locale.code"
    @click.prevent.stop="setLocale(locale.code)"
    :to="switchLocalePath(locale.code)"
    >{{ locale.name }}
<!--     <img src="/img/svg/globe.svg" class="flex-none" alt="" />
 -->  </NuxtLink>
</template>

<script setup lang="ts">

const colorMode = useColorMode()
function onClick(val: string) {
  colorMode.preference = val
}
</script>

<template>
  <div>
    <ClientOnly>
            <button
              v-if="colorMode.value === 'light'"
              name="light-mode"
              title="Light"
              @click="onClick('dark')"
            >
              <Icon class="text-white" name="line-md:moon-rising-alt-loop" size="20" />
            </button>
            <button
              v-if="colorMode.value === 'dark'"
              name="dark-mode"
              title="Dark"
              @click="onClick('light')"
            >
              <Icon name="line-md:moon-alt-to-sunny-outline-loop-transition" size="20" />
            </button>
            <template #fallback>
              <!-- this will be rendered on server side -->
              <Icon name="svg-spinners:180-ring" size="20" />
            </template>
          </ClientOnly>
  </div>
</template>


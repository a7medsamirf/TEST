<template>
    <div>

        <div class="flex justify-center gap-2 p-3 text-center rounded-md my-2 border dark:border-dark-border border-gray-200">
          <div class="days">
              <span class="text-base font-extrabold text-custom-color dark:text-white"> {{timer.days}}</span>
              <span class="block text-sm text-custom-color dark:text-white">   {{ $t('Auctions.day') }}</span>
            </div>
          <span> :</span>
            <div class="hours">
              <span class="text-base font-extrabold text-custom-color dark:text-white"> {{timer.hours}}</span>
              <span class="block text-sm text-custom-color dark:text-white">   {{ $t('Auctions.hour') }}</span>
            </div>
            <span> :</span>
            <div class="minutes">
              <span class="text-base font-extrabold text-custom-color dark:text-white"> {{timer.minutes}}</span>
              <span class="block text-sm text-custom-color dark:text-white">   {{ $t('Auctions.minute') }}</span>
            </div>
            <span> :</span>
            <div class="seconds">
              <span class="text-base font-extrabold text-custom-color dark:text-white"> {{timer.seconds}}</span>
              <span class="block text-sm text-custom-color dark:text-white">   {{ $t('Auctions.second') }}</span>
            </div>
  
      
        </div>


    </div>
  </template>
  
  
  <script setup>
  import {  watchEffect, onMounted } from "vue";
  import { useTimer } from 'vue-timer-hook';
  
  const time = new Date();
  time.setSeconds(time.getSeconds() + 999999); // 10 minutes timer
  const timer = useTimer(time);

  onMounted(() => {
  watchEffect(async () => {
    if(timer.isExpired.value) {
        console.warn('IsExpired')
    }
  })
  })
  </script>
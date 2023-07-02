<script setup>
import DefaultNavbarVue from '@/components/layouts/DefaultNavbar.vue';
import DefaultFooterVue from '@/components/layouts/DefaultFooter.vue';

</script>

<template>
  <DefaultNavbarVue />

  <main>
    <router-view />
  </main>

  <DefaultFooterVue />
</template>

<style scoped>

</style>

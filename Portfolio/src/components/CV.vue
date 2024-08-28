<template>
    <RouterLink to="/"><v-img :width="100" aspect-ratio="16/9" cover src="../assets/icons/vers-le-haut.png" id="arrow"></v-img></RouterLink>
  <v-img :width="600" aspect-ratio="16/9" cover src="../assets/CV mickael.png" style="margin: auto; position: relative;"></v-img>
</template>

<script setup lang="ts">
</script>
<style>
#arrow{
  transform: rotate(180deg);
}</style>
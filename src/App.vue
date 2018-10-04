<template>
  <div id="app" class="font-sans text-smooth">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import "@/css/main.css";
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>
<style lang="scss">
</style>

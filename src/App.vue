<template>
  <div id="app" class="font-sans text-smooth">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import "@/css/main.css";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss">
</style>

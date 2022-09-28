<template>
  <div>
    <Header />
    <Header2 />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Header2 from "./components/Header2.vue";
import Footer from "./components/Footer.vue";
export default { components: { Header, Header2, Footer } };
</script>

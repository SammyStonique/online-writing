<template>
  <div>
    <Header />
    <Header2 />

    <router-view />

    <Footer />
    <router-link to="#" @click="scrollToTop()" class="back-to-top animate-bounce"
      ><i
        class="absolute right-2 bottom-2 to-top-icon fa fa-chevron-up hover:text-white"
      ></i
    ></router-link>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Header2 from "./components/Header2.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Header, Header2, Footer },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style>
.back-to-top {
  display: none;
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 20;
  font-size: 40px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  text-align: center;
  border: 5px solid #57bee6;
}
.back-to-top:hover {
  background-color: #b35032;
  color: white;
  border: 5px solid #b35032;
}
.to-top-icon {
  color: rgba(87, 190, 230, 0.6);
  text-align: center;
  font-size: 40px;
}
.router-link-active {
  color: #b35032;
}
</style>

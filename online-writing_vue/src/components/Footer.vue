<template>
  <div class="w-full py-16 pl-24 pr-24 bg-footer-bg text-footer-color">
    <div class="flex mb-8">
      <div class="basis-5/6">
        <img src="@/assets/img/logo.jpg" alt="" />
      </div>
      <div class="basis-1/6 text-3xl">
        <a href="" target="_blank"
          ><i class="fa fa-instagram mr-4 hover:text-brown" aria-hidden="true"></i
        ></a>
        <a href="" target="_blank"
          ><i class="fa fa-facebook-square mr-4 hover:text-brown" aria-hidden="true"></i
        ></a>
        <a href="" target="_blank"
          ><i class="fa fa-youtube-square mr-4 hover:text-brown" aria-hidden="true"></i
        ></a>
        <a href="" target="_blank"
          ><i class="fa fa-twitter-square hover:text-brown" aria-hidden="true"></i
        ></a>
      </div>
    </div>
    <div class="flex mb-10">
      <div class="basis-1/4">
        <h2 class="font-bold mb-6 text-lg">Menu</h2>
        <p class="mb-2 hover:text-brown">
          <router-link to="/" @click="scrollToTop">Home</router-link>
        </p>
        <p class="mb-2 hover:text-brown">
          <router-link to="/about" @click="scrollToTop">About Us</router-link>
        </p>
        <p class="mb-2 hover:text-brown">
          <router-link to="/services" @click="scrollToTop">Services</router-link>
        </p>
        <p class="mb-2 hover:text-brown">
          <router-link to="/prices" @click="scrollToTop">Prices</router-link>
        </p>
        <p class="mb-2 hover:text-brown">
          <router-link to="/guarantees" @click="scrollToTop">Guarantees</router-link>
        </p>
        <p class="mb-2 hover:text-brown">
          <router-link to="/contacts" @click="scrollToTop">Contact Us</router-link>
        </p>
      </div>
      <div class="basis-1/4">
        <h2 class="font-bold mb-6 text-lg">Free Resources</h2>
        <p class="mb-2 hover:text-brown">
          <router-link to="/ab">Free essays</router-link>
        </p>
        <p class="mb-2 hover:text-brown">
          <router-link to="/ab">Essay tips</router-link>
        </p>
        <p class="mb-2 hover:text-brown">
          <router-link to="/ab">Essay types</router-link>
        </p>
        <p class="mb-2 hover:text-brown">
          <router-link to="/ab">Plagiarism checker</router-link>
        </p>
      </div>
      <div class="basis-1/4">
        <h2 class="font-bold mb-6 text-lg">Dissertation help</h2>
        <p class="mb-2 hover:text-brown">
          <router-link to="/ab">Free consultation</router-link>
        </p>
        <p class="mb-2 hover:text-brown">
          <router-link to="/ab">Essay examples</router-link>
        </p>
        <p class="mb-2 hover:text-brown">
          <router-link to="/ab">Buy essay</router-link>
        </p>
        <p class="mb-2 hover:text-brown">
          <router-link to="/ab">Dissertation assistance</router-link>
        </p>
        <p class="mb-2 hover:text-brown">
          <router-link to="/ab">Free dissertations</router-link>
        </p>
        <p class="mb-2 hover:text-brown">
          <router-link to="/ab">Coursework help</router-link>
        </p>
      </div>
      <div class="basis-1/4">
        <h2 class="font-bold mb-6 text-lg">Address</h2>
        <p class="mb-6 hover:text-brown">
          Twiga Towers, next to Clarion Hotel, along Moi Avenue.
        </p>
        <h2 class="font-bold mb-6 text-lg">Phone</h2>
        <p class="mb-2 hover:text-brown">+254-717-423-651</p>
      </div>
    </div>
    <p>
      Essay Writing ©2022. All rights reserved. Terms of use |<router-link
        to="/ab"
        class="hover:text-brown"
      >
        Privacy Policy</router-link
      >
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style>
.footer-links:hover {
  color: #b35032;
}
</style>

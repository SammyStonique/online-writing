<template>
  <div class="contacts">
    <div class="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.698786404983!2d36.819033504790234!3d-1.2806192853698508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4bf65dc8f%3A0xe534a1f3b7f619!2sTwiga%20Towers%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1662305788805!5m2!1sen!2ske"
        width="100%"
        height="550"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="w-full bg-blue pt-16 pb-20 pl-24 pr-20">
      <h3 class="text-5xl font-serif mb-8">Contact form</h3>
      <div class="flex mb-6">
        <div class="basis-1/3 mr-6">
          <input
            type="text"
            class="w-full h-12 text-xl focus:outline-0 pl-6 font-serif"
            placeholder="Your name"
          />
        </div>
        <div class="basis-1/3 mr-6">
          <input
            type="text"
            class="w-full h-12 text-xl focus:outline-0 pl-6 font-serif"
            placeholder="Your email"
          />
        </div>
        <div class="basis-1/3">
          <input
            type="text"
            class="w-full h-12 text-xl focus:outline-0 pl-6 font-serif"
            placeholder="Your phone"
          />
        </div>
      </div>
      <div class="mb-6">
        <textarea
          class="pt-3 pl-4 text-xl font-serif focus:outline-0"
          cols="101"
          rows="10"
          placeholder="Message"
        ></textarea>
      </div>
      <div class="text-center m-auto w-1/2">
        <button
          class="transition ease-in-out delay-150 rounded-full w-44 py-2 text-xl bg-white text-light-blue font-bold hover:bg-brown hover:text-white hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>

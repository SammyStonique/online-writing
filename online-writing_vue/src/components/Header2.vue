<template>
  <div>
    <nav
      class="bg-blue-circle pl-24 h-14 w-full border border-x-0 border-t-0 border-blue-circle shadow-xl shadow-slate-300"
    >
      <div class="flex h-14 pt-2 text-xl">
        <div class="basis-5/6 flex">
          <router-link to="/" class="mr-10"><h3 class="my-links">Home</h3></router-link>
          <router-link to="/about" class="mr-10"
            ><h3 class="my-links">About Us</h3></router-link
          >
          <router-link to="/services" class="mr-10"
            ><h3 class="my-links">Services</h3></router-link
          >
          <router-link to="/prices" class="mr-10"
            ><h3 class="my-links">Prices</h3></router-link
          >
          <router-link to="/guarantees" class="mr-10"
            ><h3 class="my-links">Guarantees</h3></router-link
          >
          <router-link to="/contacts" class="mr-10"
            ><h3 class="my-links focus:text-red-700 focus:opacity/50">
              Contact Us
            </h3></router-link
          >
        </div>
        <div class="basis-1/6 text-center">
          <h3 class="">
            <i class="fa fa-search opacity-75 text-sm" aria-hidden="true"></i> Search
          </h3>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.my-links:hover {
  color: #b35032;
}
</style>

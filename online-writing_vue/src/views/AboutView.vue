<template>
  <div class="about pt-16">
    <h3 class="font-serif text-5xl mb-6 pl-24">Shortly about us</h3>
    <div class="flex mb-20 pl-24 pr-20">
      <div class="basis-1/2">
        <img
          class="cursor-pointer hover:opacity-75"
          src="@/assets/img/index-04.jpg"
          alt=""
        />
      </div>
      <div class="basis-1/2 pt-4 pl-4">
        <p class="text-lg mb-6">
          Professional and affordable essay writing is what our company is about. We
          strongly believe in making your academic experience easier, more satisfying and
          meaningful.
        </p>
        <p class="text-lg">
          Being formed by a group of former professional academic writers from the US and
          the UK with more than 10 years of combined experience, our company prides itself
          on providing the most reliable and sympathetic academic assistance to our
          clients.
        </p>
      </div>
    </div>
    <div class="w-full bg-blue pt-12 pb-20 mb-12 pl-24 pr-20">
      <p class="text-5xl font-serif mb-12">3 steps away from a succesful essay</p>
      <div class="flex text-center">
        <div class="basis-1/3">
          <div class="m-auto w-1/2">
            <div class="relative rounded-full h-36 w-36 bg-blue-circle mb-8 ml-6">
              <i
                class="absolute top-10 left-11 fa fa-newspaper-o text-white text-6xl"
                aria-hidden="true"
              ></i>
            </div>
            <p class="text-lg">Check our advantages</p>
          </div>
        </div>
        <div class="basis-1/3">
          <div class="m-auto w-1/2">
            <div class="relative rounded-full h-36 w-36 bg-blue-circle mb-8 ml-6">
              <i
                class="absolute top-10 left-11 fa fa-pencil-square-o text-white text-6xl"
                aria-hidden="true"
              ></i>
            </div>
            <p class="text-lg">Order your custom paper</p>
          </div>
        </div>
        <div class="basis-1/3">
          <div class="m-auto w-1/2">
            <div class="relative rounded-full h-36 w-36 bg-blue-circle mb-8 ml-6">
              <i
                class="absolute top-10 left-11 fa fa-clock-o text-white text-6xl"
                aria-hidden="true"
              ></i>
            </div>
            <p class="text-lg">Get your paper on time</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pl-24 pr-20 mb-16">
      <h3 class="text-5xl font-serif mb-8">Mission Statement</h3>
      <div class="flex">
        <div class="basis-1/3 mr-4">
          <img
            class="mb-6 cursor-pointer hover:opacity-75"
            src="@/assets/img/about-02.jpg"
            alt=""
          />
          <p class="font-serif opacity-75">
            Our success grounds on the expertise and dedication of our writers. We have
            specifically assembled our team so that we have experts in all academic
            subjects and all types of academic papers.
          </p>
        </div>
        <div class="basis-1/3 mr-4">
          <img
            class="mb-6 cursor-pointer hover:opacity-75"
            src="@/assets/img/about-03.jpg"
            alt=""
          />
          <p class="font-serif opacity-75">
            With Essay Writing, you can be sure that only a qualified person will take
            care of your assignment, this way ensuring that academic standards for writing
            and research will be precisely met.
          </p>
        </div>
        <div class="basis-1/3">
          <img
            class="mb-6 cursor-pointer hover:opacity-75"
            src="@/assets/img/about-04.jpg"
            alt=""
          />
          <p class="font-serif opacity-75">
            We write high school essays and book reports. We create college research and
            term papers. We compose post-graduate dissertations. In general, we produce
            solid time-honored academic writing.
          </p>
        </div>
      </div>
    </div>
    <div class="bg-dark-blue w-full pl-24 pt-12 text-white pb-20 mb-8 pr-20">
      <h3 class="text-5xl font-serif mb-10">Our working principles</h3>
      <div class="flex">
        <div class="basis-1/3 pr-10">
          <h1 class="mb-4 text-lg font-bold opacity-75">01. Approachable</h1>
          <p class="mb-8">
            You can easily reach us and provide any comments, questions, or impressions
            you have. We value your opinion and strive to incorporate it in our services..
          </p>
          <button
            class="rounded-full w-44 py-2 px-2 bg-white text-light-blue font-bold hover:bg-brown hover:text-white"
          >
            Learn More
          </button>
        </div>
        <div class="basis-1/3 pr-10">
          <h1 class="mb-4 text-lg font-bold opacity-75">02. Responsible</h1>
          <p class="mb-8">
            We never drop an assignment and always deliver your paper on time. When we are
            overwhelmed with the number of assignments, we don't take a...
          </p>
          <button
            class="rounded-full w-44 py-2 px-2 bg-white text-light-blue font-bold hover:bg-brown hover:text-white"
          >
            Learn More
          </button>
        </div>
        <div class="basis-1/3 pr-10">
          <h1 class="mb-4 text-lg font-bold opacity-75">03. Safe</h1>
          <p class="mb-8">
            You don't need to worry while using our services - your money is safe with
            PayPal, which is one of the most secure payment systems in the world...
          </p>
          <button
            class="rounded-full w-44 py-2 px-2 bg-white text-light-blue font-bold hover:bg-brown hover:text-white"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
    <div class="working-team pl-24 pr-20 mb-16">
      <h3 class="text-5xl font-serif mb-8">Work team</h3>
      <div class="flex">
        <div class="basis-1/4 mr-8">
          <img
            class="mb-4 cursor-pointer hover:opacity-75"
            src="@/assets/img/freddy-review.jpeg"
            alt=""
            @click="showImage"
          />
          <div
            class="fixed inset-0 bg-black/90 cursor-grabbing grid place-items-center"
            v-if="zoomImage"
            @click="zoomImage = !zoomImage"
          >
            <div class="absolute right-20 top-10" @click="closeImage">
              <i
                class="fa fa-times text-3xl text-white cursor-pointer"
                aria-hidden="true"
              ></i>
            </div>
            <div class="bg-transparent">
              <img class="" src="@/assets/img/freddy-review.jpeg" alt="" />
            </div>
          </div>
          <h2 class="font-bold mb-4 text-lg">Sir Fred</h2>
          <p class="mb-2 text-sky-500">Director</p>
          <p class="opacity-75 text-sm">
            Sir Fred specializes on professional writing of essays customized to any
            request of our clients.
          </p>
        </div>
        <div class="basis-1/4 mr-8">
          <img
            class="mb-4 cursor-pointer hover:opacity-75"
            src="@/assets/img/leslie.jpg"
            alt=""
            @click="showImage"
          />
          <div
            class="fixed inset-0 bg-black/90 cursor-grabbing grid place-items-center"
            v-if="zoomImage"
            @click="zoomImage = !zoomImage"
          >
            <div class="absolute right-20 top-10" @click="closeImage">
              <i
                class="fa fa-times text-3xl text-white cursor-pointer"
                aria-hidden="true"
              ></i>
            </div>
            <div class="bg-transparent opacity">
              <img class="" src="@/assets/img/leslie.jpg" alt="" />
            </div>
          </div>
          <h2 class="font-bold mb-4 text-lg">Mary</h2>
          <p class="mb-2 text-sky-500">Course Work Writer</p>
          <p class="opacity-75 text-sm">
            Mary knows how to make a course work that would satisfy all the modern
            academic requirements.
          </p>
        </div>
        <div class="basis-1/4 mr-8">
          <img
            class="mb-4 cursor-pointer hover:opacity-75"
            src="@/assets/img/freddy-review.jpeg"
            alt=""
            @click="showImage"
          />
          <div
            class="fixed inset-0 bg-black/90 cursor-grabbing grid place-items-center"
            v-if="zoomImage"
            @click="zoomImage = !zoomImage"
          >
            <div class="absolute right-20 top-10" @click="closeImage">
              <i
                class="fa fa-times text-3xl text-white cursor-pointer"
                aria-hidden="true"
              ></i>
            </div>
            <div class="bg-transparent opacity">
              <img class="" src="@/assets/img/freddy-review.jpeg" alt="" />
            </div>
          </div>
          <h2 class="font-bold mb-4 text-lg">Thomas</h2>
          <p class="mb-2 text-sky-500">Writing Consultant</p>
          <p class="opacity-75 text-sm">
            If you are looking for a piece of useful advice on writing your paper, Thomas
            is the one to consult with.
          </p>
        </div>
        <div class="basis-1/4">
          <img
            class="mb-4 cursor-pointer hover:opacity-75"
            src="@/assets/img/gracy-review.jpg"
            alt=""
            @click="showImage"
          />

          <h2 class="font-bold mb-4 text-lg">Natalie Barnes</h2>
          <p class="mb-2 text-sky-500">Administrator</p>
          <p class="opacity-75 text-sm">
            Don’t know what service of Essay Writing is the most suitable for you? Natalie
            can help.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zoomImage: false,
    };
  },
  methods: {
    showImage() {
      this.zoomImage = !this.zoomImage;
    },
    closeImage() {
      this.zoomImage = false;
    },
  },
};
</script>

<style scoped></style>

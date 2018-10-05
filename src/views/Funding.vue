<template>
    <section class="funding">
        <div class="container mx-auto px-4 pt-16 pb-12 text-center ">
            <h1 class="mb-10">Funding</h1>

            <p>We would like to thank CERN For funding super computer project</p>

            <carousel :autoplay="true" :loop="true" :perPage="1" class="mt-12" :navigationEnabled="true">
                <slide v-for="image in cernImages" :key="image.name">
                    <img :src="image.url" :alt="image.name">
                </slide>
            </carousel>

            <p>Images Source: https://cds.cern.ch/record/2627035?ln=en</p>
        </div>

    </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Funding",
  components: {
    Carousel,
    Slide
  },
  data: () => ({
    cernImages: [
      {
        name: "CERN Image 1",
        url: require("@/images/cern/1.jpg")
      },
      {
        name: "CERN Image 2",
        url: require("@/images/cern/2.jpg")
      },
      {
        name: "CERN Image 3",
        url: require("@/images/cern/3.jpg")
      },
      {
        name: "CERN Image 4",
        url: require("@/images/cern/4.jpg")
      },
      {
        name: "CERN Image 5",
        url: require("@/images/cern/5.jpg")
      }
    ]
  })
};
</script>

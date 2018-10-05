<template>
    <section class="funding">
        <div class="container mx-auto px-4 pt-16 pb-12 text-center ">
            <h1 class="mb-10">Funding</h1>

            <p>We would like to thank Cern For funding super computer project</p>
        </div>
        <carousel :autoplay="true" :loop="true">
            <slide>
                Slide 1 Content
            </slide>
            <slide>
                Slide 2 Content
            </slide>
        </carousel>

    </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Funding",
  components: {
    Carousel,
    Slide
  }
};
</script>

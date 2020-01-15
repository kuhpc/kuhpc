<template>
  <div class="about text-xl font-hairline my-8 font-light">
    <div class="container mx-auto px-3 py-4 text-center ">
      <h1 class="font-light mb-4 ">About Us</h1>
      <div class="text-justify text-black">
        <p class=" text-normal text-md">
          The High Performance Computing service provides a serial and parallel computing facility in support of research activity within the KU community. It is part of the System Administration Vertical within Information Systems and Technology Facility. The service is comprised of the Supermicro clusters.
        </p>
        <p>
          Through this site, researchers can review the systems and services that are available, find documentation and training materials and obtain the user service and support needed to conduct computational studies on the systems.
        </p>
      </div>
      <h2 class="font-light mt-12">Teams</h2>
    <div class="flex flex-wrap justify-between pt-6">
      <a class="no-underline text-black flex-grow lg:w-1/6 w-1/3 px-4 py-6 m-2 border rounded bg-white" href="#" v-for="teacher in teachers" :key="teacher.name">
        <img class="w-32 h-32 rounded-full border shadow-md mb-4" :src="teacher.imageUrl" :alt="teacher.name">
        <p class="text-xlg" v-text="teacher.name"></p>
        <p class="text-sm" v-text="teacher.description"></p>
      </a>
    </div>

      <section class="text-left mx-auto mx-12">
        <p class="my-8">We would like to thank every volunteer</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    teachers: [
      {
        name: "Dr. Rajendra Adhikari",
        imageUrl: "http://placekitten.com/200/300",
        description: "Kathmandu University"
      },
      {
        name: "Dr Hari Parsad",
        imageUrl: "http://placekitten.com/200/300",
        description: "Kathmandu University"
      }
    ],
  })
};
</script>

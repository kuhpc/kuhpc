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
      <br/>
        <h2 class="font-light">Adhoc Committee</h2>
                <br/>
                <ul class="list-reset ml-6  text-left" >
                    <li>Dr. Rajendra Adhikari (Coordinator)</li>
                    <li>Dr. Kundan Lal Shrestha(Member)</li>
                    <li>Mr. Sameer Tamrakar(Member)</li>
                    <li>Mr. Saran Shrestha(Member)</li>
                    <li> Dr. Sailesh Chitrakar (Member)</li>
                    <li> Mr. Rajesh Shrestha (Member)</li>
                </ul>

                <br/>
     

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
    ]
  })
};
</script>

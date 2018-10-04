<template>
    <div>
    <header class="bg-grey-lightest border-t-4 border-blue hero-background">
        <div class="container px-4 mx-auto">
            <div class="block sm:flex mt-4">
                <div class="justify-center sm:justify-start sm:w-1/2 flex items-center">
                    KU HPC
                </div>
                <div class="block text-center sm:w-1/2 sm:text-right font-semibold">
                    <router-link to="/about" class="inline-block mr-8 py-6 no-underline text-grey-darkest hover:text-black">
                        Funding
                    </router-link>
                    <router-link to="/contact" class="inline-block mr-8 py-6 no-underline text-grey-darkest hover:text-black">
                        Contact
                    </router-link>
                </div>
            </div>

            <div class="text-center  mt-8 mb-12">
                <h1 class="text-4xl md:text-5xl text-black font-semibold font-headline">
                    Super Computer At Kathmandu University
                </h1>
            </div>
        </div>
    </header>
    <img src="@/images/super_computer_banner.png" alt="Super Computer Banner">
    </div>
</template>

<script>
export default {
  name: "App-Header"
};
</script>

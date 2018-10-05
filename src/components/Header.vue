<template>
    <header class="bg-black   border-t-4 border-b-4 border-blue hero-background">
        <div class="container px-4 mx-auto">
            <div class="block sm:flex mt-4">
                <router-link to="/" class="justify-center no-underline  text-lg font-bold sm:justify-start sm:w-1/2 flex items-center text-white hover:text-blue">
                    KU HPC
                </router-link>
                <div class="block text-center sm:w-1/2 sm:text-right font-semibold">
                    <router-link to="/software" class="inline-block mr-8 py-6 no-underline  text-white hover:text-blue">
                        Software
                    </router-link>
                    <router-link to="/funding" class="inline-block mr-8 py-6 no-underline  text-white hover:text-blue">
                        Funding
                    </router-link>
                    <router-link to="/about" class="inline-block mr-8 py-6 no-underline  text-white hover:text-blue">
                        About
                    </router-link>
                    <router-link to="/contact" class="inline-block mr-8 py-6 no-underline  text-white hover:text-blue">
                        Contact
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: "App-Header"
};
</script>

<template>
    <div class="container-inner mx-auto">
        <div class="text-2xl sm:text-3xl font-bold text-center py-32">This is a test page</div>
        <router-link to="/"><div class="flex justify-center"><button class="p-10 bg-gray-100 border-2 border-gray-300 hover:bg-gray-200">Home</button></div></router-link>
    </div>
</template>

<script>
export default {
  name: "NotFound",

  data: () => ({
  }),
};
</script>


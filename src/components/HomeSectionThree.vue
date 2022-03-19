<template>
  <div class="container-inner flex mx-auto py-16">
    <div class="basis-1/2">
      <img src="../assets/technology.jpg" alt="Technology" class="shadow-xl pt-8 mx-auto">
    </div>
    <div class="basis-1/2">
      <div class="prose max-w-none space-y-12 ml-8 pr-8">
        <h2>The Technology That Makes It All Possible</h2>
        <p>Gold Prairie is an enterprise software system developed by a technology company, not an audit firm. Created by a leading provider of data analytics software, Gold Prairie has been built to handle the rigors of even the largest and most complex data sets.</p>
        <button class="section-btn hover:bg-blue-400 hover:bg-opacity-20">Learn More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSectionThree",

  data: () => ({
  }),
};
</script>


<style scoped>
  .section-btn {
    text-transform: uppercase;
    font-weight: bold;
    color: theme('colors.blue.500');
    padding: 12px 32px 12px 32px;
    border: 1px solid theme('colors.blue.500');
    border-radius: 5px;
  }

</style>

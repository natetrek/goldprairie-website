<template>
  <div class="call-to-action-container">
    <div class="container-inner mx-auto py-16">
      <div class="prose max-w-none flex-col text-center px-32">
        <h2 class="text-white">Want a Closer Look?</h2>
        <p class="text-white pb-4">We invite you to take an in-depth tour of Gold Prairie with us. See how easy it is to strengthen internal controls, reduce costs and increase your profits through continuous monitoring.</p>
        <button class="section-btn">Request a demo</button>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "HomeSectionFour",

  data: () => ({
  }),
};
</script>


<style scoped>
  .call-to-action-container {
    background-color: #333333;
  }
  .section-btn {
    text-transform: uppercase;
    font-weight: bold;
    padding: 12px 32px 12px 32px;
    color: theme('colors.white');
    background-color: theme('colors.blue.500');
    border: 1px solid theme('colors.blue.500');
    border-radius: 5px;
  }
  .section-btn:hover {
    border: 1px solid theme('colors.white');
  }

</style>

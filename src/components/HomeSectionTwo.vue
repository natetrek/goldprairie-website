<template>
  <div class="bg-gray-100">
    <div class="container-inner flex mx-auto py-16">
      <div class="basis-1/2">
        <div class="prose max-w-none space-y-12 py-8">
          <h2>Why Wait For Results?</h2>
          <p>Gold Prairie pinpoints payment errors automatically and delivers them directly to your internal staff—day and night, rain or shine. Rather than waiting for an outside audit to uncover these errors, you can identify and address them immediately, before they become a drain on your profits.</p>
          <button class="section-btn hover:bg-blue-400 hover:bg-opacity-20">Learn More</button>
        </div>
      </div>
      <div class="basis-1/2">
        <img  src="../assets/control-feedback-loop.png" alt="Control feedback loop" class="mx-auto">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSectionTwo",

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

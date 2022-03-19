<template>

    <!-- Hero area -->
    <ImageCarousel :isMobile="isMobile" />

    <!-- Solution highlights -->
    <div class="home-content-section container-inner mx-auto py-16">
      <div class="prose max-w-none pb-12">
        <h2 class="text-center">Address the Source of Payment Errors</h2>
        <p>Gold Prairie tracks the reasons why payment errors occur, helping you identify and understand their root causes. Beyond just catching errors, you can strengthen your internal controls and address problems at the source.</p>
      </div>
      <div class="flex basis-1/3 gap-12 mb-4">
        <div class="prose max-w-none flex-col">
          <img src="../assets/shopping-cart.svg" alt="Retail & Grocery Payment Monitoring" width="48px" class="mx-auto">
          <h3>Retail & Grocery Payment Monitoring</h3>
          <p>Gold Prairie pinpoints and prevents a wide range of payment errors common in the retail industry, including duplicate payments, pricing errors, missed promotional allowances and missed rebates. With Gold Prairie, you can identify overpayments in real-time at a fraction of your current cost.</p>
          <button class="font-bold text-blue-500">Learn More</button>
        </div>
        <div class="prose max-w-none flex-col">
          <img src="../assets/task-complete.svg" alt="Duplicate Payment Prevention" width="48px" class="mx-auto">
          <h3>Duplicate Payment Prevention</h3>
          <p>Why wait for a recovery audit to catch duplicate payments? With Gold Prairie, you can eliminate duplicate payments from your organization. Gold Prairie continuously monitors your payment systems and automatically detects potential duplicate payments before they go out the door.</p>
          <button class="font-bold text-blue-500">Learn More</button>
        </div>
        <div class="prose max-w-none flex-col">
          <img src="../assets/alarm-clock.svg" alt="Vendor File Analysis and Monitoring" width="48px" class="mx-auto">
          <h3>Vendor File Analysis and Monitoring</h3>
          <p>Get your vendor file under control and keep it clean for the long-haul. Gold Prairie enables you to quickly identify duplicated and erroneous vendor entries. And, once it’s clean, Gold Prairie’s automated vendor monitoring system will help you keep it that way.</p>
          <button class="font-bold text-blue-500">Learn More</button>
        </div>
      </div>
    </div>

    <!-- Why wait for results? -->
    <div class="bg-gray-100">
      <div class="home-content-section container-inner flex mx-auto py-16">
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

    <!-- Technology -->
    <div class="home-content-section container-inner flex mx-auto py-16">
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

    <!-- Call to action -->
    <div class="call-to-action">
      <div class="container-inner mx-auto py-16">
        <div class="prose max-w-none flex-col text-center px-32">
          <h2 class="text-white">Want a Closer Look?</h2>
          <p class="text-white pb-4">We invite you to take an in-depth tour of Gold Prairie with us. See how easy it is to strengthen internal controls, reduce costs and increase your profits through continuous monitoring.</p>
          <button class="cta-btn">Request a demo</button>
        </div>
      </div>
    </div>

</template>

<script>
import ImageCarousel from '../components/ImageCarousel.vue'

export default {
  name: "BaseHome",

  components: {
    ImageCarousel,
  },

  data: function() {
    return {
      isMobile: false    };
  },

  created() {
    // add an event listener to the window so we can switch image sizes
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },

  destroyed() {
      window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    // update variable used to select mobile display elements
    handleResize() {
      this.isMobile = window.innerWidth < 650;
    },

  }
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

  .call-to-action {
    background-color: #333333;
  }
  .cta-btn {
    text-transform: uppercase;
    font-weight: bold;
    padding: 12px 32px 12px 32px;
    color: theme('colors.white');
    background-color: theme('colors.blue.500');
    border: 1px solid theme('colors.blue.500');
    border-radius: 5px;
  }
  .cta-btn:hover {
    border: 1px solid theme('colors.white');
  }

</style>


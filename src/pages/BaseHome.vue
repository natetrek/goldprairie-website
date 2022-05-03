<template>

    <!-- Hero area -->
    <ImageCarousel :isMobile="isMobile" />

    <!-- Solution highlights -->
    <div class="home-content-section container-inner mx-2 md:mx-auto py-8 md:py-16">
      <div class="space-y-8 pb-12">
        <div class="heading text-3xl md:text-4xl text-center">Address the Source of Payment Errors</div>
        <div class="content">Gold Prairie tracks the reasons why payment errors occur, helping you identify and understand their root causes. Beyond just catching errors, you can strengthen your internal controls and address problems at the source.</div>
      </div>
      <div v-if="isMobile" class="border-t-2 border-gray-100 pb-2"></div>
      <div class="flex flex-col md:flex-row basis-1/3 mx-2 md:mx-auto gap-8 md:gap-12 my-4">
        <div class="flex-col space-y-4">
          <img src="../assets/shopping-cart.svg" alt="Retail & Grocery Payment Monitoring" width="48px" class="mx-auto">
          <div class="subheading">Retail & Grocery Payment Monitoring</div>
          <div class="content">Gold Prairie pinpoints and prevents a wide range of payment errors common in the retail industry, including duplicate payments, pricing errors, missed promotional allowances and missed rebates. With Gold Prairie, you can identify overpayments in real-time at a fraction of your current cost.</div>
          <button class="font-bold text-blue-500">Learn More</button>
        </div>
        <div v-if="isMobile" class="border-t-2 border-gray-100"></div>
        <div class="flex-col space-y-4">
          <img src="../assets/task-complete.svg" alt="Duplicate Payment Prevention" width="48px" class="mx-auto">
          <div class="subheading">Duplicate Payment Prevention</div>
          <div class="content">Why wait for a recovery audit to catch duplicate payments? With Gold Prairie, you can eliminate duplicate payments from your organization. Gold Prairie continuously monitors your payment systems and automatically detects potential duplicate payments before they go out the door.</div>
          <button class="font-bold text-blue-500">Learn More</button>
        </div>
        <div v-if="isMobile" class="border-t-2 border-gray-100"></div>
        <div class="flex-col space-y-4">
          <img src="../assets/alarm-clock.svg" alt="Vendor File Analysis and Monitoring" width="48px" class="mx-auto">
          <div class="subheading">Vendor File Analysis and Monitoring</div>
          <div class="content">Get your vendor file under control and keep it clean for the long-haul. Gold Prairie enables you to quickly identify duplicated and erroneous vendor entries. And, once it’s clean, Gold Prairie’s automated vendor monitoring system will help you keep it that way.</div>
          <button class="font-bold text-blue-500">Learn More</button>
        </div>
      </div>
    </div>

    <!-- Why wait for results? -->
    <div class="bg-gray-100">
      <div class="home-content-section container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-8 md:py-16">
        <!-- On mobile - display image on top -->
        <div v-if="isMobile" class="basis-1/2">
          <img  src="../assets/control-feedback-loop.png" alt="Control feedback loop" class="mx-auto">
        </div>
        <div class="basis-1/2">
          <div class="space-y-8 md:space-y-12 pt-4 md:pt-8">
            <div class="heading text-3xl md:text-4xl text-center md:text-left">Why Wait For Results?</div>
            <div class="content">Gold Prairie pinpoints payment errors automatically and delivers them directly to your internal staff—day and night, rain or shine. Rather than waiting for an outside audit to uncover these errors, you can identify and address them immediately, before they become a drain on your profits.</div>
            <div class="text-center md:text-left"><button class="section-btn hover:bg-blue-400 hover:bg-opacity-20">Learn More</button></div>
          </div>
        </div>
        <div v-if="!isMobile" class="basis-1/2">
          <img  src="../assets/control-feedback-loop.png" alt="Control feedback loop" class="mx-auto">
        </div>
      </div>
    </div>

    <!-- Technology -->
    <div class="home-content-section container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-8 md:py-20">
      <div class="basis-1/2 pb-12 md:pb-4">
        <img src="../assets/technology.jpg" alt="Technology" class="shadow-xl pt-4 mx-auto">
      </div>
      <div class="basis-1/2">
        <div class="space-y-8 md:space-y-12 md:ml-8 pr-8">
          <div class="heading text-3xl md:text-4xl text-center md:text-left">The Technology That Makes It All Possible</div>
          <div class="content">Gold Prairie is an enterprise software system developed by a technology company, not an audit firm. Created by a leading provider of data analytics software, Gold Prairie has been built to handle the rigors of even the largest and most complex data sets.</div>
          <div class="text-center md:text-left"><button class="section-btn hover:bg-blue-400 hover:bg-opacity-20">Learn More</button></div>
        </div>
      </div>
    </div>

    <!-- Call to action -->
    <div class="call-to-action">
      <div class="container-inner mx-2 md:mx-auto py-16">
        <div class="flex-col text-center space-y-8 md:px-32">
          <div class="cta-heading text-3xl md:text-4xl">Want a Closer Look?</div>
          <div class="cta-content text-left md:text-center pb-4">We invite you to take an in-depth tour of Gold Prairie with us. See how easy it is to strengthen internal controls, reduce costs and increase your profits through continuous monitoring.</div>
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
  .heading {
    font-weight: 400;
    color: #222;
  }
  .subheading {
    font-size: 1.125rem;
    font-weight: 600;
    color: #222;
  }
  .content {
    line-height: 1.7rem;
    color: #333;
  }
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
  .cta-heading {
    font-weight: 400;
    color: theme('colors.white');
  }
  .cta-content {
    line-height: 1.7rem;
    color: theme('colors.white');
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


<template>

    <!-- Hero area -->
    <ImageCarousel :isMobile="isMobile" />

    <!-- Title -->
    <div class="text-3xl sm:text-4xl font-bold text-center py-8 sm:py-12">
      <h2>Posts</h2>
    </div>

   <div class="container-inner mx-auto mb-16">
      <p class="prose prose-lg sm:prose-xl  max-w-none">Thanks for stopping by. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ipsum dolores officia praesentium quasi eius? Provident quam tenetur alias aperiam unde labore, dolore placeat
        laudantium fugit adipisci mollitia nam illum ab dolorum quos, delectus nobis ex? And checkout my last startup, <a href="/treks/how-to-get-better-at-coding/">Flex.io</a>
      </p>
    </div>

    <div class="container-inner text-xl border-t border-gray-500 mx-auto border-b py-16 mb-16">
      <h2 class="font-bold mb-6">Highlights</h2>

      <ul class="text-lg sm:text-xl space-y-6">
        <li class="checkmark">
          <div>Highlight One</div>
          <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
        </li>
        <li class="checkmark">
          <div>Highlight Two</div>
          <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
        </li>
        <li class="checkmark">
          <div>Highlight Three</div>
          <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
        </li>
        <li class="checkmark">
          <div>Highlight Four</div>
          <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
        </li>
      </ul>
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

</style>


<template>

    <!-- Hero area -->
    <ImageCarousel :isMobile="isMobile" />

    <!-- Software Services -->
    <HomeSectionOne />

    <!-- Software Services -->
    <HomeSectionTwo />

    <!-- Technology -->
    <HomeSectionThree />


</template>

<script>
import ImageCarousel from '../components/ImageCarousel.vue'
import HomeSectionOne from '../components/HomeSectionOne.vue'
import HomeSectionTwo from '../components/HomeSectionTwo.vue'
import HomeSectionThree from '../components/HomeSectionThree.vue'

export default {
  name: "BaseHome",

  components: {
    ImageCarousel,
    HomeSectionOne,
    HomeSectionTwo,
    HomeSectionThree,
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


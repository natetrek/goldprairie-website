<template>
    <div class="carousel-image-container relative h-64 sm:h-48 lg:h-560">
      <!-- Carousel image-->
      <img id="carousel-img-id" class="absolute w-full h-full brightness-75" :src="getCarouselImgUrl(imgIndex)" alt="Trekking Logs">
      <!-- Carousel image selectors-->
      <div id="carousel-img-selectors" class="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2.5">
        <div v-for="(item,idx) in new Array(4)" :key="idx">
          <button v-if="this.imgIndex==(idx+1)" @click="btnUpdateImg(idx)" class="carousel-btn bg-white"></button>
          <button v-else @click="btnUpdateImg(idx)" class="carousel-btn bg-gray-400"></button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        isMobile: {
            type: Boolean,
            required: true
        }
    },

    data: function() {
        return {
          imgIndex: 1,
        };
    },

    methods: {
        // get image URL for the carousel images
        getCarouselImgUrl(pic) {
        this.heroImage = this.isMobile ? 'hero-0'+pic+'-sm.jpg' : 'hero-0'+pic+'-lg.jpg'
        return new URL(`../assets/${this.heroImage}`, import.meta.url).href
        },

        // update the carousel image when user clicks the previous nav button
        btnPrev() {
        this.imgIndex = this.imgIndex <= 1 ? 7 : this.imgIndex - 1
        document.getElementById("carousel-img-id").src = this.getCarouselImgUrl(this.imgIndex)
        },

        // update the carousel image when user clicks the next nav button
        btnNext() {
        this.imgIndex = this.imgIndex >= 7 ? 1 : this.imgIndex + 1
        document.getElementById("carousel-img-id").src = this.getCarouselImgUrl(this.imgIndex)
        },

        // update the carousel image when user clicks a carousel button
        btnUpdateImg(idx) {
        this.imgIndex = idx+1
        document.getElementById("carousel-img-id").src = this.getCarouselImgUrl(this.imgIndex)
        },

    }
}
</script>


<style scoped>
  .carousel-image-container #carousel-img-selectors {
      display: flex;
  }

  .carousel-btn {
    color: theme('colors.white');
    border: 1px solid theme('colors.gray.400');
    padding: 4px;
    margin: 4px;
    border-radius: 50%;
  }
  .carousel-btn:hover {
    background-color: theme('colors.white');
  }
</style>

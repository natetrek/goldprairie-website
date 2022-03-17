<template>
    <div class="image-card">
        <div class="h-48 lg:h-auto lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <img :src="getImageUrl(card.image)" :alt="card.title">
        </div>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 pl-6 flex flex-col justify-between leading-normal">
            <div class="mb-2">
            <p class="text-sm text-gray-600 flex items-center pb-2">
                {{ card.location }}
            </p>
            <div class="card-title text-gray-900 font-bold text-xl mb-2">{{ card.title }}</div>
            <p class="text-gray-700 text-base">{{ card.description }}</p>
            </div>
            <div class="flex flex-col items-left text-sm">
            <p class="text-gray-900 leading-loose">{{ (card.distance).toFixed(0) }} miles / {{ (card.distance * 1.60934).toFixed(0) }} km</p>
            <p class="text-gray-600"> {{ card.tripdate }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    },

    methods: {
        // get image URL for images in the list of trek posts
        getImageUrl(pic) {
        return new URL(`../assets/${pic}`, import.meta.url).href
        },

        scrollToTop() {
            window.scrollTo(0,0);
        },
    }
}
</script>


<style scoped>
  .card-title:hover {
    color: theme('colors.blue');
    text-decoration: underline;
  }
</style>



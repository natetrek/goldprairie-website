<script setup>
    import AppHeader from './components/AppHeader.vue';
    import AppFooter from './components/AppFooter.vue';
</script>

<template>
    <div class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen">
        <AppHeader/>

        <div class="flex flex-col flex-grow overflow-hidden mt-20">
            <router-view />
        </div>

        <AppFooter/>
    </div>
</template>

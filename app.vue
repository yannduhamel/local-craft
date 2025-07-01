<script setup lang="ts">

</script>

<template>
    <div class="layout">
        <AppHeader />
        <NuxtPage />
        <AppFooter />
    </div>
</template>

<style lang="scss">

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    
    html, body, #__nuxt {
        height: 100svh;
        background-color: $primary-color;
    }

    .layout {
        position: relative;
        height: 100svh;
    }
</style>

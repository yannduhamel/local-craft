<template>
    <div class="header-container">
        <div class="app-name">
        Local Craft
        </div>
        <div class="app-nav">
            <Icon name="iconamoon:information-circle-bold" class="app-icon" />
            <Icon name="charm:moon" class="app-icon" />
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
    .header-container {
        position: fixed;
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
        width: 90svw;
        z-index: 1000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        backdrop-filter: blur(16px) saturate(159%);
        -webkit-backdrop-filter: blur(16px) saturate(159%);
        background-color: rgba(211, 203, 197, 0.15);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.125);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

        .app-name {
            margin: 1rem;
            text-align: center;
            font-size: 1.7rem;
            font-family: 'Clash Grotesk', sans-serif;
            font-weight: 600;
        }

        .app-nav {
            display: flex;
            margin: 1rem;
            gap: 0.7rem;
        }
    }
</style>
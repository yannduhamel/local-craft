<template>
    <div class="footer-container">
        <div class="app-footer">
        développé par Yann Duhamel
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
    .footer-container {
        position: fixed;
        bottom: 1rem;
        left: 50%;
        width: 90svw;
        transform: translateX(-50%);
        z-index: 1000;
        display: flex;
        justify-content: center;

        .app-footer {
            padding: 1.2rem;
            margin: 1rem;
            text-align: center;
            font-family: 'Clash Grotesk', sans-serif;
            font-size: 0.8rem;
            backdrop-filter: blur(16px) saturate(159%);
            -webkit-backdrop-filter: blur(16px) saturate(159%);
            background-color: rgba(211, 203, 197, 0.15);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.125);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
    }
</style>
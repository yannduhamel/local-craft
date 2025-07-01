<script lang="ts" setup>
const client = useSupabaseClient()
const user = useSupabaseUser()

async function signOut() {
    await client.auth.signOut()
    await navigateTo('/')
}
</script>

<template>
    <div class="header-container">
        <div class="app-name" @click="navigateTo('/')">
        Local Craft
        </div>
        <div class="app-nav">
            <Icon name="iconamoon:information-circle-bold" class="app-icon" />
            <Icon name="charm:moon" class="app-icon" />
            <Icon 
            v-if="user"
            name="cuida:logout-outline"
            class="app-icon"
            title="Se déconnecter"
            @click="signOut"/>
        </div>
    </div>
</template>

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
            color: #39393A;
            cursor: pointer;
        }

        .app-nav {
            display: flex;
            margin: 1rem;
            gap: 0.7rem;

            .app-icon {
                cursor: pointer;
            }
        }
    }
</style>
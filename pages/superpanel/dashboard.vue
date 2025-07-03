<script lang="ts" setup>
    import { ref } from 'vue'

    definePageMeta({
        middleware: 'auth'
    })

    const activeTab = ref<'ajout' | 'modification' | 'suppression'>('ajout')
</script>

<template>
    <div class="dashboard-wrapper">
        <nav class="tabs-wrapper">
            <button 
                class="tab" 
                :class="{ active: activeTab === 'ajout' }" 
                @click="activeTab = 'ajout'">
                Ajout
            </button>
            <button 
                class="tab" 
                :class="{ active: activeTab === 'modification' }" 
                @click="activeTab = 'modification'">
                Modification
            </button>
            <button 
                class="tab" 
                :class="{ active: activeTab === 'suppression' }" 
                @click="activeTab = 'suppression'">
                Suppression
            </button>
        </nav>

        <div class="tab-content">
            <div v-if="activeTab === 'ajout'">
                <!-- Contenu Ajout -->
            </div>

            <div v-if="activeTab === 'modification'">
                <!-- Contenu Modification -->
            </div>

            <div v-if="activeTab === 'suppression'">
                <!-- Contenu Suppression -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .dashboard-wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: $background-color;

        .tabs-wrapper {
            display: flex;
            border-bottom: 2px solid #ddd;
            width: 90svw;

            .tab {
                flex: 1;
                padding: 12px 0;
                text-align: center;
                cursor: pointer;
                border: none;
                background: none;
                font-family: $main-font;
                font-size: 1.5rem;
                font-weight: 600;
                color: $primary-color;
                transition: color 0.3s ease;

                &.active {
                    color: $secondary-color;
                    border-bottom: 3px solid $secondary-color;
                    font-weight: 700;
                }

                &:hover:not(.active) {
                    color: $darken-secondary-color;
                }
            }
        }

        .tab-content {
            padding: 20px;
            border-top: none;
            min-height: 200px;
            background-color: #fafafa;
            width: 90svw;
            height: 70svh;
        }
    }
</style>
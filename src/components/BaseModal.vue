<template>
    <div v-if="isOpen" class="modal-overlay" @click.self="emit('close')">
        <div class="modal-content">
            <header class="modal-header">
                <slot name="header">
                    <h2>
                        Default
                    </h2>
                </slot>
            </header>
            <main class="modal-header">
                
            </main>
            <footer class="modal-footer">
                <slot name="footer"></slot>
            </footer>
            
        </div>
    </div>
</template>

<script setup>
defineProps({
    isOpen: Boolean
})
const emit = defineEmits(['close'])
</script>

<style scoped>
    .modal-overlay {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center ;
        inset: 0;
    }
    .modal-content {
        background-color: white;
        padding: 20px;
        width: 400px;
        border-radius: 12px;
    }
</style>
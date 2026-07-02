<template>
    <header>
        <slot name="button">
            <button>
                Quick View
            </button>
        </slot>
    </header>
    <main v-if="props.isOpen" class="modal-overlay">
        <slot name="default">

        </slot>
        <slot name="base">
            <div class="modal-content">
            <header class="modal-header">
                <slot name="header">
                    
                </slot>
            </header>
            <main class="modal-header">
                
            </main>
            <footer class="modal-footer">
                <slot name="footer"></slot>
            </footer>
        </div>
        </slot>
    </main>         
</template>

<script setup>
    const props = defineProps({
        isOpen: {
            type: Boolean,
            default: false
        }
    })
</script>

<style scoped>
    .modal-overlay {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center ;
        inset: 0;
    }
</style>
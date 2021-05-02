<template>
    <button
        class="bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
    >
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const Button = defineComponent({
    data() {
        return { count: 1 }
    },
    methods: {
        increment() {
            this.count++
        }
    }
})

export default Button
</script>

<style></style>

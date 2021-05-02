<template>
    <div
        class="bg-gray-100 text-gray-700 h-screen w-full flex justify-center items-center p-4"
    >
        <router-view />

        <Loader />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    mounted() {
        console.log(this.$store.state.investment.entries.investment)
    }
})
</script>

<style></style>

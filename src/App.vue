<template>
    <div
        class="bg-gray-100 text-gray-700 min-h-screen w-full flex justify-center items-center p-4"
    >
        <router-view />

        <Loader v-if="!loaded" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    computed: {
        loaded() {
            return this.$store.state.investment.status.loaded
        }
    },
    async created() {
        await this.axios.get('http://localhost:3001/').then((response) => {
            this.$store.dispatch('investment/setInvestments', response.data)
        })
    }
})
</script>

<style></style>

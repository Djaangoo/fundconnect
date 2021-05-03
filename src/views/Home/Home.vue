<template>
    <div class="flex flex-1 flex-col lg:flex-row items-center justify-center">
        <div
            class="bg-white p-12 rounded-lg shadow-lg flex flex-col justify-center items-center select-none mb-4 lg:mb-0 lg:mr-4"
        >
            <div class="text-xl text-center mb-4">
                List of investments
            </div>
            <Button
                v-for="investment in investments"
                :key="investment._id"
                class="mb-2"
                @click="selectInvestment(investment)"
            >
                {{ investment.value.Name }}
            </Button>
        </div>
        <div v-if="currentInvestment._id" class="flex flex-col">
            <LineCharts class="flex-1 mb-4" />
            <PieChart class="flex-1" />
        </div>
        <div v-else class="bg-white rounded-lg shadow-lg px-12 py-6">
            Choose Fund!
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import { IInvestment } from '../../model/interfaces'
import PieChart from './components/PieCharts.vue'
import LineCharts from './components/LineCharts.vue'

export default defineComponent({
    components: { PieChart, LineCharts },
    computed: {
        ...mapState('investment', ['investments', 'currentInvestment'])
    },
    methods: {
        selectInvestment(invest: IInvestment): void {
            this.$store.dispatch('investment/setCurrentInvestment', invest)
        }
    }
})
</script>

<style></style>

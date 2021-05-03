<template>
    <div>
        <div v-if="currentInvestment._id">
            <VueHighchart
                class="bg-white rounded-lg shadow-lg"
                type="chart"
                :options="chartOptions"
                :redraw-on-update="true"
                :one-to-one-update="false"
                :animate-on-update="true"
            />
        </div>
        <div v-else>
            Not selected
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
    name: 'PieCharts',
    data() {
        return {}
    },
    computed: {
        ...mapState('investment', ['currentInvestment']),
        chartOptions() {
            return {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Country allocation'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                },
                series: [
                    {
                        name: 'Country',
                        colorByPoint: true,
                        data: this.$store.getters[
                            'investment/prepareAllocations'
                        ]
                    }
                ]
            }
        }
    }
})
</script>

<style></style>

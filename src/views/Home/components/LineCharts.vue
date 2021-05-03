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
    name: 'LineCharts',
    data() {
        return {}
    },
    computed: {
        ...mapState('investment', ['currentInvestment']),
        chartOptions() {
            return {
                chart: {
                    type: 'spline'
                },
                title: {
                    text: 'Performance history'
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        // don't display the dummy year
                        month: '%e. %b'
                    },
                    title: {
                        text: 'Date'
                    }
                },
                yAxis: {
                    min: 0
                },
                tooltip: {
                    pointFormat: '{point.x:%e. %b}: {point.y:.2f}'
                },

                plotOptions: {
                    series: {
                        marker: {
                            enabled: true
                        }
                    }
                },
                series: [
                    {
                        name: this.$store.state.investment.currentInvestment
                            .value.Name,
                        data: this.$store.getters[
                            'investment/preparePerformance'
                        ]
                    }
                ],

                responsive: {
                    rules: [
                        {
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                plotOptions: {
                                    series: {
                                        marker: {
                                            radius: 2.5
                                        }
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        }
    }
})
</script>

<style></style>

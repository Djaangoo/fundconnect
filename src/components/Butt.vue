
<template>
    <p>{{ count }} World!</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const Butt = defineComponent({
    data() {
        return { count: 1 }
    },
    methods: {
        increment() {
            this.count++
        }
    }
})

export default Butt
</script>

<style scoped>
p {
    font-size: 2em;
    text-align: center;
}
</style>
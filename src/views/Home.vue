<template>
    <div class="container-blur">
        <BoxDesc />
        <div class="divisor"></div>
        <BoxModelo />
    </div>
</template>

<script>
import BoxDesc from '../components/BoxDesc.vue'
import BoxModelo from '../components/BoxModelo.vue'

export default {
    components: { BoxDesc, BoxModelo }
}
</script>

<style>

</style>
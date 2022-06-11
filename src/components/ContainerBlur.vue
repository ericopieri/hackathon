<template>
  <div class="container-blur">
                <div class="box-desc">
                    <div class="descs">
                        <ion-icon class="icone-desc" name="water-outline"></ion-icon>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                    </div>
                    <div class="descs">
                        <ion-icon class="icone-desc" name="build-outline"></ion-icon>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                    </div>
                </div>
                <div class="divisor"></div>
                <BoxModelo/>
            </div>
</template>

<script>
import BoxModelo from './BoxModelo.vue'
export default {
    components: {
    BoxModelo
}
}
</script>

<style>

</style>
<template>
  <canvas :class="`canva-${$route.params.id}`" :id="`canva-${$route.params.id}`"></canvas>
</template>

<script>
import { fabric } from 'fabric'
export default {
    mounted(){
        var canvas = new fabric.Canvas(`canva-${this.$route.params.id}`);
        var rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 20,
        height: 20
        });
        canvas.add(rect);
    }
}
</script>

<style>

</style>
<template>
    <div :class="`canva-${$route.params.id}`">
        <canvas :id="`canva-${$route.params.id}`"></canvas>
    </div>
</template>

<script>
import { fabric } from 'fabric'
export default {
    mounted(){
        this.criarCanvas()
    },
    methods: {
        criarCanvas(){
            var canvas = new fabric.Canvas(`canva-${this.$route.params.id}`);
            this.canvas = canvas
            var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 20,
            height: 20
            });
            canvas.add(rect);
            canvas.setHeight(500);
            canvas.setWidth(800);
            canvas.renderAll();
        },
    }
}
</script>

<style>
.canva-galao1 .canvas-container{
    width: 100%;
    height: 100%;
}

.canvas-container .lower-canvas{
    width: 100%;
    height: 100%;
}
</style>
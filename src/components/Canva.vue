<template>
  <div :class="`canva-${$route.params.id}`">
    <canvas :id="`canva-${$route.params.id}`"></canvas>
  </div>
</template>

<script>
import { fabric } from "fabric";
import EventBus from "@/event-bus/eventBus.js";

export default {
  mounted() {
    this.criarCanvas();
    EventBus.$on("insereImagemBus", this.insereImagem);
  },
  methods: {
    criarCanvas() {
      this.canvas = new fabric.Canvas(`canva-${this.$route.params.id}`);
      if (this.$route.params.id == 'galao1'){
        this.canvas.setHeight(316);
        this.canvas.setWidth(230);
      } else{
        this.canvas.setHeight(316);
        this.canvas.setWidth(317);
      }
      this.canvas.renderAll();
    },
    insereImagem(file) {
      let reader = new FileReader();
      let objetosCanva = this.canvas.getObjects();
      if (objetosCanva.length != 0) {
        this.canvas.remove(objetosCanva[0]);
      }
      reader.onload = (fileReaded) => {
        new fabric.Image.fromURL(fileReaded.target.result, (image) => {
          if (image.width > 500) {
            image.scale(0.15);
          } else {
            image.scale(0.05);
          }
          this.canvas.add(image);
          console.log(fileReaded.target.result)
          document.querySelector('.imagem-selecionada').setAttribute('src', fileReaded.target.result)
        });
      };
      reader.readAsDataURL(file);
      this.canvas.renderAll();
    },
  },
};
</script>

<style>
.canva-galao1 .canvas-container {
  width: 100%;
  height: 100%;
}

.canvas-container .lower-canvas {
  width: 100%;
  height: 100%;
}

.canvas-container {
  margin: 0;
}
</style>

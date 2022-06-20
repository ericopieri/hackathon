<template>
  <div class="personalizacao">
    <div class="visualizador"></div>
    <form method="post" enctype="multipart/form-data">
      <div>
        <label class="inserir" for="image_uploads">INSIRA UMA IMAGEM</label>
        <input
          type="file"
          id="image_uploads"
          name="image_uploads"
          accept=".jpg, .jpeg, .png"
          multiple
          style="opacity: 0; width: 0%"
          @change="insereImagem"
        />
      </div>
    </form>
    <div class="box-exportar">
      <div class="baixar">
        <h2 class="texto-centro">Exportar PNG</h2>
      </div>
      <div class="baixar">
        <h2 class="texto-centro">Exportar PDF</h2>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "@/event-bus/eventBus.js";

export default {
  methods: {
    insereImagem(event) {
      let alvo = event.target;
      let file = alvo.files[0];
      if (file.type == "image/png" || file.type == "image/jpeg") {
        EventBus.$emit("insereImagemBus", file);
      }
    },
  },
};
</script>

<style></style>

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
        <h2 class="texto-centro" @click="tirarPrint">Exportar PNG</h2>
      </div>
      <div class="baixar">
        <h2 class="texto-centro">Exportar PDF</h2>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "@/event-bus/eventBus.js";
import html2canvas from 'html2canvas';

export default {
  mounted(){
    
  },
  methods: {
    insereImagem(event) {
      let alvo = event.target;
      let file = alvo.files[0];
      if (file.type == "image/png" || file.type == "image/jpeg") {
        EventBus.$emit("insereImagemBus", file);
      }
    },
    tirarPrint(){
      html2canvas(document.querySelector(".garrafa-personalizavel"), {allowTaint: true, windowWidth: window.innerWidth, windowHeight: window.innerHeight}).then(canva => {
        // console.log(canva.toDataURL())
        let af = document.createElement('a')
        af.href = canva.toDataURL('image/png')
        af.download = 'af.png'
        af.click()
        console.log(canva.toDataURL('image/png'))
      })
    }
  },
};
</script>

<style></style>

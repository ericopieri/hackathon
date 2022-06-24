<template>
  <div class="personalizacao">
    <div class="visualizador" style="display: flex; align-itens: center; justify-content: center; overflow: hidden; box-sizing: border-box; border: 15px solid #e8f1f2">
      <img src="" class="imagem-selecionada" alt="" style="transform: scale(0.8); padding: 10% 0 10% 0">
    </div>
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
import * as firebase from '../plugins/firebase.js'

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
      const localFoto = document.getElementsByClassName("garrafa-personalizavel")[0]
      html2canvas(localFoto, {}).then(canva => {
        canva.toBlob((blob) => {
          firebase.storage.ref(firebase.auth.currentUser.uid).put(blob).then((snapshot) => {
            console.log(snapshot);
          });
        })
      })
    }
  },
};
</script>

<style></style>

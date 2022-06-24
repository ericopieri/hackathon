<template>
  <div class="personalizacao">
    <div class="visualizador" style="max-width:575px; display: flex; align-itens: center; justify-content: center; overflow: hidden; box-sizing: border-box; border: 15px solid #e8f1f2">
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
      <div class="baixar" style="background-color: #a3e263; cursor:pointer;">
        <h2 class="texto-centro" @click="enviarParaCarrinho">Adicionar ao carrinho</h2>
      </div>
      <div class="baixar" @click="tirarPrint">
        <h2 class="texto-centro" style="cursor:pointer;" >Exportar PNG</h2>
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
    enviarParaCarrinho(){
      const localFoto = document.getElementsByClassName("garrafa-personalizavel")[0]
      html2canvas(localFoto, {}).then(canva => {
        canva.toBlob((blob) => {
          firebase.storage.ref(firebase.auth.currentUser.uid).put(blob).then((snapshot) => {
            console.log(snapshot);
            this.$swal({
              icon: 'success',
              text: 'Item adicionado. Você será direcionado ao carrinho!',
              confirmButtonColor:'#90EE90',
              confirmButtonText: 'Ir ao carrinho'
            }).then(() => {
              setTimeout(()=> {
                this.$router.push({path:"/carrinho"})
              },1000)
            })
          });
        })
      })
    },
    tirarPrint(){
      html2canvas(document.querySelector(".garrafa-personalizavel"), {allowTaint: true, windowWidth: 1920, windowHeight: 1080}).then(canva => {
        // console.log(canva.toDataURL())
        let download = document.createElement('a')
        download.href = canva.toDataURL('image/png')
        download.download = 'download.png'
        download.click()
        console.log(canva.toDataURL('image/png'))
    })}
  },

};
</script>

<style></style>

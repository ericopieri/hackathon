<template>
  <div class="container-blur" style="height:40%;  display:flex; align-items: center; justify-content: center">
    <div class="container-carrinho" style="height:100%;">
        <div class="box-imagem imagem-1" style="background-size: cover;"></div>
        <div class="box-textos-carrinho">
            <h1>GALÃO BODYBUILDING 1,3L</h1>
            <h2 class="id-compra">#1234567890</h2>
            <div class="box-opcoes">
                <h2>Excluir</h2>
            </div>
        </div>
        <div class="calculo-preco">
            <h3>R$ 00,00</h3>
        </div>
    </div>
    <!-- <div class="container-carrinho">
        <div class="box-imagem imagem-2"></div>
        <div class="box-textos-carrinho">
            <h1>GALÃO BODYBUILDING 1,6L</h1>
            <h2 class="id-compra">#1234567890</h2>
            <div class="box-opcoes">
                <h2>Excluir</h2>
            </div>
        </div>
        <div class="calculo-preco">
            <h3>R$ 00,00</h3>
        </div>
    </div>
    <div class="container-carrinho">
        <div class="box-imagem imagem-3"></div>
        <div class="box-textos-carrinho">
            <h1>SHAKEIRA UMA DOSE</h1>
            <h2 class="id-compra">#1234567890</h2>
            <div class="box-opcoes">
                <h2>Excluir</h2>
            </div>
        </div>
        <div class="calculo-preco">
            <h3>R$ 00,00</h3>
        </div>
    </div> -->
  </div>
</template>

<script>
import * as firebase from '../plugins/firebase.js'
export default {
    mounted(){
        firebase.storage.ref(firebase.auth.currentUser.uid).getDownloadURL().then((url) => {
            this.imagemGarrafa = url
            const box = document.querySelector('.imagem-1')
            box.style.backgroundImage = 'url(' + this.imagemGarrafa + ')'
        })
        .catch((error) => {
            console.error(error)
        });
    }
}
</script>

<style>

</style>
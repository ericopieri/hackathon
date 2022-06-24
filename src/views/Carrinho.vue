<template>
  <div>
    <div class="container-blur">
            <div class="container-carrinho">
                <div class="box-imagem imagem-1"></div>
                <div class="box-textos-carrinho">
                    <h1>GALÃO BODYBUILDING 1,3L</h1>
                    <div class="box-opcoes">
                        <router-link :to=" { path: '/registro'}">Comprar Agora</router-link>
                    </div>
                </div>
            </div>
    </div>
  </div>
</template>

<script>
import * as firebase from '../plugins/firebase.js'

export default {
    mounted() {
        firebase.storage.ref(firebase.auth.currentUser.uid).getDownloadURL().then((url) => {
            const box = document.querySelector('.imagem-1')
            box.style.backgroundImage = 'url(' + url + ')'
        })
        .catch((error) => {
            console.error(error)
        });
    }
}
</script>

<style>

</style>
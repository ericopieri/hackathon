<template>
  <div class="container-Cadastro container-Login">
        <div class="box-login">
            <h2 class="texto-login">Login</h2>
        </div>
        <input placeholder="Email" class="input-login logar" type="email" v-model="user.email">
        <input placeholder="Senha" class="input-login logar" type="password" v-model="user.senha">
        <div class="box-login">
            <a href="#" class="texto-preto btn-login" @click.stop.prevent="login">
                <p>Logar</p>
            </a>
        </div>
        <div id="pergunta-cadastro">Não possue login? <router-link to="/cadastro" id="buttonzin"> Cadastre-se </router-link></div>
    </div>
</template>

<script>
import * as firebase from '../plugins/firebase.js'

export default {
    data() {
        return {
            user: {}
        }
    },
    methods: {
        async login() {
            try {
                firebase.auth.signInWithEmailAndPassword(this.user.email, this.user.senha)
                this.$router.push('/')
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style>

</style>
<template>
  <div class="container-Cadastro">
        <div class="box-login">
            <h2 class="texto-login">Cadastro</h2>
        </div>
        <input placeholder="Nome" class="input-login input-nome" type="text" v-model="user.nome">
        <input placeholder="Sobrenome" class="input-login input-nome" type="text" v-model="user.sobrenome">
        <input placeholder="Email" class="input-login" type="email" v-model="user.email">
        <input placeholder="Senha" class="input-login" type="password" v-model="user.senha" >
        <input placeholder="Confirmar Senha" class="input-login" type="password" v-model="user.confirmarSenha">
        <input placeholder="Data de nascimento" class="input-login input-data" type="date">
        <div class="box-login">
            <a href="Login.html" class="texto-preto btn-login" @click.stop.prevent="signUp">
                <p>Cadastrar</p>
            </a>
        </div>
        <div>Já possui cadastro? <router-link to="/login" style="color: #1b98e0"> Entre </router-link></div>
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
        async signUp() {
            try {
                if (this.user.senha == this.user.confirmarSenha) {
                    await firebase.auth.createUserWithEmailAndPassword(this.user.email, this.user.confirmarSenha)
                } else {
                    alert('Campo senha e Confirmar Senha diferentes')
                }
                this.$router.push('/')
            } catch (err) {
                console.error(err.code)
            }
        }
    }
}
</script>

<style>

</style>
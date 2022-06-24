<template>
    <nav class="nav">
        <div class="logo-nav" >
            <router-link to="/" class="logo"></router-link>
        </div>
        <div class="box-icon-nav">
            <router-link style="max-width: 50px" to="/historico" class="icone-nav"><mdicon size="large" title="Histórico" name="clock-time-two-outline"></mdicon></router-link>
            <router-link style="max-width: 50px" to="/carrinho" class="icone-nav"><mdicon size="large" title="Carrinho" name="cart-outline"></mdicon></router-link>
            <router-link style="max-width: 50px" to="/login" class="icone-nav"><mdicon size="large" title="Perfil" name="account-circle-outline"></mdicon></router-link>
        </div>
    </nav>
</template>

<script>
import * as firebase from '../plugins/firebase.js'

export default {
    data(){
        return{
            isLogged: false
        }
    },
    methods: {
        async logout() {
            firebase.auth.signOut()
        }
    }
}
</script>

<style>

</style>